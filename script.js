$(document).ready(function() {
    // Data storage for hexagon information


    const teamGlowClasses = {
        'Team 1': 'glow-team-1',
        'Team 2': 'glow-team-2',
        'Team 3': 'glow-team-3',
        'Team 4': 'glow-team-4',
        'Team 5': 'glow-team-5',
        'Team 6': 'glow-team-6'
    };

    // Synergy sets
    const synergySets = [
        ['3-1', '4-1', '4-2'],
        ['3-3', '4-4', '5-5'],
        ['1-3', '1-4', '2-4'],
        ['4-6', '3-6', '2-6'],
        ['6-7', '6-8', '6-9'],
        ['6-4', '6-3', '6-2'],
        ['8-1', '8-2', '9-1'],
        ['7-5', '8-4', '9-3'],
        ['8-6', '9-6', '10-6'],
        ['8-8', '8-9', '9-8'],
        ['10-4', '11-3', '11-4'],
        ['3-8', '4-8', 4-9']
    ];

    const teamColors = {
        'Team 1': '#FF0000', 
        'Team 2': '#B200FF', 
        'Team 3': '#0026FF',
        'Team 4': '#FFAE00', 
        'Team 5': '#FFF200', 
        'Team 6': '#4CFF00'  
    };

    // Function to calculate team scores
    function calculateTeamScores() {
        const teamScores = {
            'Team 1': { total: 0, base: 0 },
            'Team 2': { total: 0, base: 0 },
            'Team 3': { total: 0, base: 0 },
            'Team 4': { total: 0, base: 0 },
            'Team 5': { total: 0, base: 0 },
            'Team 6': { total: 0, base: 0 }
        };

        // Calculate base scores
        Object.entries(hexagonData).forEach(([hexId, hexInfo]) => {
            if (hexInfo.ownedBy !== 'free') {
                teamScores[hexInfo.ownedBy].base += hexInfo.tilePoints;
                teamScores[hexInfo.ownedBy].total += hexInfo.tilePoints;
            }
        });

        // Clear previous synergy outlines
        $('.synergy-outline').remove();

        // Calculate synergy bonuses and add borders
        synergySets.forEach(synergy => {
            const owner = hexagonData[synergy[0]].ownedBy;
            if (owner !== 'free' && synergy.every(hexId => hexagonData[hexId].ownedBy === owner)) {
                synergy.forEach(hexId => {
                    teamScores[owner].total += hexagonData[hexId].tilePoints;
                });
                // Create and add synergy outline
                createSynergyOutline(synergy);
            }
        });

        return teamScores;
    }

    // Function to create and add a synergy outline
    function createSynergyOutline(synergy) {
        const edges = {};
        const tolerance = 200;

        synergy.forEach(hexId => {
            const hexElement = $(`.hexagon[data-id='${hexId}']`)[0];
            const hexEdges = getHexagonEdges(hexElement);
            hexEdges.forEach(edge => {
                const similarEdgeKey = findSimilarEdgeKey(edges, edge, tolerance);
                if (similarEdgeKey) {
                    delete edges[similarEdgeKey]; // Remove internal edges
                } else {
                    const edgeKey = `${edge.start.x},${edge.start.y}-${edge.end.x},${edge.end.y}`;
                    edges[edgeKey] = edge;
                }
            });
        });

        // Create SVG lines for the outline
        Object.values(edges).forEach(edge => {
            const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
            line.setAttribute('x1', edge.start.x);
            line.setAttribute('y1', edge.start.y);
            line.setAttribute('x2', edge.end.x);
            line.setAttribute('y2', edge.end.y);
            line.setAttribute('class', 'synergy-outline');
            line.setAttribute('stroke', 'black');
            line.setAttribute('stroke-width', '10px');
            $('.svg-overlay').append(line);
        });
    }

    // Function to get the edges of a hexagon
    function getHexagonEdges(hexElement) {
        const points = hexElement.points;
        const edges = [];
        for (let i = 0; i < points.numberOfItems; i++) {
            const start = points.getItem(i);
            const end = points.getItem((i + 1) % points.numberOfItems);
            edges.push({ start: { x: start.x, y: start.y }, end: { x: end.x, y: end.y } });
        }
        return edges;
    }

    function findSimilarEdgeKey(edges, edge, tolerance) {
        const edgeKeys = Object.keys(edges);
        for (const key of edgeKeys) {
            const [start, end] = key.split('-');
            const [startX, startY] = start.split(',').map(Number);
            const [endX, endY] = end.split(',').map(Number);
            if (isWithinTolerance(edge.start, { x: startX, y: startY }, tolerance) && 
                isWithinTolerance(edge.end, { x: endX, y: endY }, tolerance)) {
                return key;
            }
            if (isWithinTolerance(edge.start, { x: endX, y: endY }, tolerance) && 
                isWithinTolerance(edge.end, { x: startX, y: startY }, tolerance)) {
                return key;
            }
        }
        return null;
    }

    // Function to check if two points are within a certain tolerance
    function isWithinTolerance(point1, point2, tolerance) {
        return Math.abs(point1.x - point2.x) <= tolerance && Math.abs(point1.y - point2.y) <= tolerance;
    }

    // Function to update the leaderboard
    function updateLeaderboard() {
        const teamScores = calculateTeamScores();
        const leaderboard = $('#leaderboard-list');
        leaderboard.empty();

        // Sort teams by total score
        const sortedTeams = Object.entries(teamScores).sort((a, b) => b[1].total - a[1].total);

        sortedTeams.forEach(([team, scores]) => {
            const listItem = $('<li>');

            // Create the color cube
            const colorCube = $('<span>').addClass('color-cube').css('background-color', teamColors[team]);

            // Create the text element
            const textElement = $('<span>').text(`${team}: ${scores.total} points (${scores.base} points)`);

            // Append the color cube and text element to the list item
            listItem.append(colorCube).append(textElement);

            // Append the list item to the leaderboard
            leaderboard.append(listItem);
        });
    }

    const centers = {};
    $('.hexagon').each(function() {
        const hexId = $(this).data('id');
        const hexInfo = hexagonData[hexId];
        if (hexInfo && hexInfo.ownedBy !== 'free') {
            if (teamGlowClasses[hexInfo.ownedBy]) {
                $(this).addClass(teamGlowClasses[hexInfo.ownedBy]);
            }
        }
    });

    // Click event handler for hexagons to display info
    $('.hexagon').on('click', function(event) {
        event.stopPropagation();
        const hexId = $(this).data('id');
        const hexInfo = hexagonData[hexId];
        if (hexInfo) {
            $('#hexId').text(hexId);
            $('#itemName').text(hexInfo.itemName);
            $('#itemQuantity').text(hexInfo.itemQuantity);
            $('#ownedBy').text(hexInfo.ownedBy);
            $('#tilePoints').text(hexInfo.tilePoints);
            $('#infoBox').css({
                top: event.pageY + 'px',
                left: (event.pageX + 10) + 'px',
                display: 'block'
            });
        }
    });

    $(document).on('click', function(event) {
        $('#infoBox').hide();
    });

    updateLeaderboard(); 

    // Function to update hexagon text display
    function updateHexagonText() {
        $('.hexagon-text').remove(); // Remove existing text elements

        if ($('#displayTextToggle').is(':checked')) {
            const textOption = $('#textOptions').val();

            Object.entries(hexagonData).forEach(([hexId, hexInfo]) => {
                if (hexInfo.ownedBy !== 'free') {
                    const hexElement = $(`.hexagon[data-id='${hexId}']`);
                    const centerX = (hexElement[0].getBBox().x + hexElement[0].getBBox().width / 2);
                    const centerY = (hexElement[0].getBBox().y + hexElement[0].getBBox().height / 2);
                    let textContent = '';

                    if (textOption === 'item') {
                        textContent = `${hexInfo.itemName}\nx${hexInfo.itemQuantity}`;
                    } else if (textOption === 'team') {
                        textContent = `${hexInfo.ownedBy}`;
                    }

                    const textLines = textContent.split('\n');

                    const svgText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
                    svgText.setAttribute('x', centerX);
                    svgText.setAttribute('y', centerY);
                    svgText.setAttribute('class', 'hexagon-text');
                    svgText.setAttribute('text-anchor', 'middle');
                    svgText.setAttribute('dominant-baseline', 'middle');
                    svgText.setAttribute('font-weight', 'bold');
                    svgText.setAttribute('fill', 'black');

                    textLines.forEach((line, index) => {
                        const tspan = document.createElementNS('http://www.w3.org/2000/svg', 'tspan');
                        tspan.setAttribute('x', centerX);
                        tspan.setAttribute('dy', index === 0 ? 0 : '1.2em'); // Line spacing
                        tspan.textContent = line;
                        svgText.appendChild(tspan);
                    });

                    $('.svg-overlay').append(svgText);

                    // Adjust font size to fit within hexagon
                    adjustFontSizeToFit(svgText, hexElement[0].getBBox().width * 0.8, hexElement[0].getBBox().height * 0.8);
                }
            });
        }
    }

    // Function to adjust font size to fit within hexagon
    function adjustFontSizeToFit(textElement, maxWidth, maxHeight) {
        let fontSize = 120;
        textElement.setAttribute('font-size', fontSize);
        while ((textElement.getBBox().width > maxWidth || textElement.getBBox().height > maxHeight) && fontSize > 6) {
            fontSize -= 1;
            textElement.setAttribute('font-size', fontSize);
        }
        // Adjust tspans individually to ensure text wrapping
        const tspans = textElement.getElementsByTagName('tspan');
        for (let tspan of tspans) {
            adjustTspanToFit(tspan, maxWidth);
        }
    }

    // Function to adjust tspan to fit within maxWidth
    function adjustTspanToFit(tspan, maxWidth) {
        let words = tspan.textContent.split(' ');
        let line = '';
        let testLine = '';
        let newLine = false;

        for (let i = 0; i < words.length; i++) {
            testLine += words[i] + ' ';
            tspan.textContent = testLine.trim();
            if (tspan.getComputedTextLength() > maxWidth) {
                tspan.textContent = line.trim();
                line = words[i] + ' ';
                newLine = true;
            } else {
                line += words[i] + ' ';
                newLine = false;
            }

            if (newLine) {
                const newTspan = document.createElementNS('http://www.w3.org/2000/svg', 'tspan');
                newTspan.setAttribute('x', tspan.getAttribute('x'));
                newTspan.setAttribute('dy', '1.2em');
                newTspan.textContent = line.trim();
                tspan.parentNode.appendChild(newTspan);
                tspan = newTspan;
                testLine = words[i] + ' ';
                line = words[i] + ' ';
            }
        }
        tspan.textContent = line.trim();
    }

    // Hexagon Visability

    function updateHexagonVisibility() {
        if ($('#toggleHexagons').is(':checked')) {
            $('.hexagon').show();
        } else {
            $('.hexagon').hide();
        }
    }

    $('#toggleHexagons').on('change', function() {
        updateHexagonVisibility();
    });

    updateHexagonVisibility();

    // Text

    if ($('#displayTextToggle').is(':checked')) {
        updateTextOverlay();
    }

    // Event listener for display text toggle
    $('#displayTextToggle').on('change', updateHexagonText);

    // Event listener for text options change
    $('#textOptions').on('change', updateHexagonText);

    // Initial call to update text on hexagons
    updateHexagonText();

    // Challenges

    // Handle challenge link click
    $('.challenge-link').on('click', function(event) {
        if ($(this).hasClass('challenge-ended')) {
            event.preventDefault(); // Prevent click if challenge has ended
        } else {
            const challengeId = $(this).data('id');
            const challenge = challenges.find(ch => ch.id === challengeId);
            if (challenge) {
                $('#challengeModalLabel').text(`${challenge.title} - Ends in ${$('.time-left[data-id="' + challengeId + '"]').text()}`);
                $('#challenge-info').html(challenge.info); // Use .html() to render HTML tags
                $('#challenge-steps').empty();
                challenge.steps.forEach(step => {
                    const stepElement = `
                        <li>
                            ${step.text}
                            ${step.image ? `<br><img src="${step.image}" alt="Step Image" class="img-fluid mt-2 mb-2">` : ''}
                        </li>
                    `;
                    $('#challenge-steps').append(stepElement);
                });
                $('#challengeModal').modal('show');
            }
        }
    });

    // Function to set the remaining time for challenges
    function setRemainingTime() {
        const now = new Date();
        $('.time-left').each(function() {
            const challengeId = $(this).data('id');
            const challenge = challenges.find(ch => ch.id === challengeId);
            if (challenge) {
                const endTime = new Date(challenge.endTime);
                const timeLeft = endTime - now;

                if (timeLeft > 0) {
                    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
                    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));

                    $(this).text(`${days}d ${hours}h ${minutes}m`);
                    $(this).removeClass('warning danger');

                    if (timeLeft < 3 * 60 * 60 * 1000) { // Less than 3 hours
                        $(this).addClass('danger');
                    } else if (timeLeft < 12 * 60 * 60 * 1000) { // Less than 12 hours
                        $(this).addClass('warning');
                    }
                } else {
                    $(this).text('Ended');
                    $(this).closest('a').addClass('challenge-ended').off('click'); // Mark as ended and disable click
                    $(this).closest('a').text(`Challenge ${challengeId} - Ended`); // Change text to "Challenge X - Ended"
                }
            }
        });
    }

    setRemainingTime();
    setInterval(setRemainingTime, 60000); // Update every minute



    // Collapsible Leaderboard + settings
    $('#leaderboardToggleButton').on('click', function() {
        $('#leaderboardSection').collapse('toggle');
    });

    $('#leaderboardSection').on('shown.bs.collapse', function () {
        $('#leaderboardToggleIcon').removeClass('bi-chevron-up').addClass('bi-chevron-down');
    }).on('hidden.bs.collapse', function () {
        $('#leaderboardToggleIcon').removeClass('bi-chevron-down').addClass('bi-chevron-up');
    });

    // Toggle settings section
    $('#settingsToggleButton').on('click', function() {
        $('#settingsSection').collapse('toggle');
    });

    $('#settingsSection').on('shown.bs.collapse', function () {
        $('#settingsToggleIcon').removeClass('bi-chevron-up').addClass('bi-chevron-down');
    }).on('hidden.bs.collapse', function () {
        $('#settingsToggleIcon').removeClass('bi-chevron-down').addClass('bi-chevron-up');
    });
});
