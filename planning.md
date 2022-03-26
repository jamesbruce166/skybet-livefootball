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

---

1. First, create the table of live events using the dummy data
2. Create the side panel event data
3. Create an odds toggle function to switch between fraction and decimal
4. Connect the websocket to contexts and pass live event data to the table
5. Make the cells clickable so that the selected event can be passed to the panel
6. Dynamically load the markes and outcomes
7. Filter data using the 'displayable' property
8. Group live games by their 'linkedEventTypeName' in the table view
9. Make use of the websocket subscriptions for live updates of an event
