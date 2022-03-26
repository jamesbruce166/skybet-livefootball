# Planning Outcomes

1. Aim for a single page app
2. Display live events in a table style with clickable cells
3. When a cell is clicked, a sticky side panel should show the full details of the event
4. Based on the data, markets & outcomes should be loaded dynamically using the ID's

-   Redux feels like overkill for a single page app but could be ideal for rapidly changing data (subscriptions)
-   Either way I decided to stay lightweight and stick with react contexts for sharing events on the screen

    -   this is because I am assuming a child component (table cells) would set the 'clicked' event which would have to be displayed on a parent component
        or a component of the same level (side panel), so generic state and props wont do the trick here...

-   Following the instructions, I should use WebSocket.
-   I was tempted to use Material-UI but feel if I fail to complete most of the tasks, I can try show some CSS skillset, plus MUI seems a little heavy for such a small set of components.
