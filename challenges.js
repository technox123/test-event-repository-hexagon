// challenges.js

const challenges = [
    {
        id: 1,
        title: "Tears of Guthix Challenge",
        endTime: '2024-07-05T21:00:00Z',
        steps: [
            { text: "Step 1: Gather tears from the blue streams." },
            { text: "Step 2: Avoid the green streams as they deplete your collected tears." },
            { text: "Step 3: Collect as many tears as possible within the time limit." },
            { text: "Post this screenshot in your <strong>teams screenshot channel</strong> before the challenge ends.", image: "challenges/1/example.png" },
            { text: "We will then divide your tear total by your quest points to show your tears per tick score. We will average each teams 3 best scores to give a team score. Team with highest score wins." },
            { text: "As an extra incentive we will give a bond to the person with the highest individual ratio. Current leader is me at 0.76254" },
        ],
        info: "This, challenge is simple. Collect as many tears as you can at Tears of Guthix minigame.<br><strong>IMPORTANT:</strong> Take a screenshot of your effort showing, <strong>the number of tears collected in your chat log</strong> whilst having your <strong>quest tab open showing your quest point total</strong> as well as your <strong>name</strong> and the <strong>password 'Tears of Guthex'</strong>, See my example below."
    },
    {
        id: 2,
        title: "Barbarian Assault Challenge",
        endTime: '2024-06-30T23:00:00Z',
        steps: [
            { text: "Multiple attempts allowed, no ringers please, only team mates."},
            { text: "The <strong>password for this event is 'What the Hex'</strong>. The final screenshot must show <strong>ALL</strong> of your team-mates saying this as you reappear by the ladder, and include the <strong>game duration in the chat log.</strong>"},
            { text: "The screenshot taker should be using runelite and have these settings enabled (or similar):", image: "challenges/2/example.png" }
        ],
        info: "This event is a team barbarian assault speed run. Simply have 5 of your team complete a full game of barbarian assault in the fastest time."
    },
    {
        id: 3,
        title: "Hespori Speed Challenge",
        endTime: '2024-06-30T11:00:00Z',
        steps: [
            { text: "The <strong>password is 'Hexpori be damned'</strong>, which must be in the  screenshot, with the <strong>time in the chat box, your name visible, your inventory tab open</strong> and with a <strong>clear view of the gear you are wearing</strong> whilst <string>still in the hespori cave!</strong>", image: "challenges/3/example.png"},
            { text: "Fastest 3 times from each team will be totalled to decide the winning team."},
        ],
        info: "Kill hespori in the fastest time possible <strong>using only Barrows gear in the head, chest, legs and weapons slots.</strong> You can use anything else in other slots, capes, jewellry etc."
    },
    {
        id: 4,
        title: "Little Big Drop Challenge",
        endTime: '2024-07-06T23:00:00Z',
        steps: [
            { text: "The winning team will be the one whos 8th best player has the highest value across all teams. So stronger players help the lower levels for best chance to win."},
            { text: "Any drops from any source count, including ones you have already got."},
            { text: "Screenshots must include your name, the standard password and either a picture of the drop in a chest, or the drop in the chat log.<br><strong>Clue rewards count!</strong<"},
        ],
        info: "You should all be able to see a new thread in your team chats called High Value Drops. Please use this to post your highest value drop of the event, and update it when you get a better drop by deleting the old post, so one drop per player."
    },
    {
        id: 5,
        title: "The Standard Jad Challenge",
        endTime: '2024-07-02T12:00:00Z',
        steps: [
            { text: "The winning team will be the one whos 8th best player has the highest value across all teams. So stronger players help the lower levels for best chance to win."},
            { text: "Make sure your settings will show repeat completion of combat tasks as shown below.", image: "challenges/5/example.png" },
            { text: "Screenshot with the challenge password, your name, the CA completion and kill time pls."},
        ],
        info: "Fastest Jad kill while completing 'Facing Jad head-on' wins, simple."
    }
];
