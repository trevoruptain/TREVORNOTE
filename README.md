# Trevornote App

[View on Heroku](https://trevornote.herokuapp.com/#/)

This repository contains the Trevornote app, a single-page Evernote clone which enables users to create, edit, and organize rich-text notes. Notes can be formatted with styling options, images, and code blocks, and can also be tagged or added to notebooks.

## Technologies

The Trevornote backend was written in Ruby riding on Rails. The database implemented was PostgreSQL. The frontend was written in JavaScript, utilizing React in conjunction with Redux to construct and intuitive user interface.

## Features

The primary features of Trevornote are notes, notebooks, and tags. All of these are broken down into sensible and intuitive React components. With notes being the primary feature of the app, the notes container served as a logic center for determining which overlays and sidebars to display. The result was a simple user interface where users were presented with their notes, and could simply click on the title or note body to begin editing.

![Screenshot1](./public/readme_1.png "Trevornote Main Page")

At any point, users can click the navigation buttons to open a sidebar and filter notes by notebook or tag name.

![Screenshot2](./public/readme_2.png "Trevornote Overlay")

![Screenshot3](./public/readme_3.png "Trevornote Sidebar")

Since each sidebar has similar note summaries and themes, React components could be reused for each parent component with differences passed down as props. A good example of this is a NoteSummaryItem, a mapped component which provides a clickable summary of each note:

```javascript
this.state.notes.map(note => (
  <NoteSummaryItem
    key={note.id}
    type={`notebooks/${this.state.currentNotebook.id}/notes`}
    note={note}
    deleteNote={this.props.deleteNote}
    currentNote={this.props.currentNote.id == note.id} />
  ))
```

Any user action, such as creating or deleting an item, dispatches an action which affects the state. Accordingly, each component is re-rendered with the updated state, providing a dynamic interface where users can immediately see the effects of their actions. This is true even with modal components, utilized when users add a new notebook or tag.

## Future Work

Moving forward, Trevornote will be given a variety of features. These include autosave, shortcuts, live chat, and implementation of animate.js for a smoother animation experience.
