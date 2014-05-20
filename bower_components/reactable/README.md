Reactable [![Build Status](https://travis-ci.org/glittershark/reactable.svg?branch=master)](https://travis-ci.org/glittershark/reactable)
=========

Fast, flexible, and simple data tables in React.

This is a work in progress. Much of the API defined in this readme won't work
yet. If you like the look of this, feel free to star or watch the repository. If
you're ambitious or feel like getting your hands dirty, I welcome pull requests!
I promise I won't bite.

## Installation

**Using Bower:**

```
bower install [--save] reactable
```

Or, you can just download the raw file
[here](https://github.com/glittershark/reactable/raw/master/build/reactable.js).

## Usage

The simplest example:

```javascript
var Table = Reactable.Table;
React.renderComponent(
    <Table className="table" data={[
        { Name: 'Griffin Smith', Age: '18' },
        { Age: '23',  Name: 'Lee Salminen' },
        { Age: '28', Position: 'Developer' },
    ]} />,
    document.getElementById('table')
);
```

While pretty basic, this example demonstrates a couple things:
- Columns in the data array can be in any order, and you can omit any you like
- Regular React DOM attributes such as className will pass-through to the
  rendered `<table>`

### Further Customization

You can also manually build up your rows using `Reactable.Tr` nested in a table,
also using the `data` prop, but this time containing only one javascript object.
This approach can be freely combined with the `data` property on the `<Table>`,
and is useful if you want to specify per-row attributes such as classes, like so:

```javascript
var Table = Reactable.Table,
    Tr = Reactable.Tr;

React.renderComponent(
    <Table className="table" data={[
        { name: 'Row one', content: 'These are regular data rows' },
        { name: 'Row two', content: 'They work like above' },
    ]} >
        <Tr className="special-row"
            data={{ name: 'Other Row' , content: 'This is a different row' }} />
    </Table>,
    document.getElementById('table')
);
```

### Even More Customization

If you want to customize the rendering of individual columns, you can go a level deeper by
embedding a `Reactable.Td` inside your `Reactable.Tr`. These have the required `column`
property, and an optional `data` property if you want to customize the data that's used
for sorting and filtering - if the latter isn't specified, the data used will default to
the `Td`'s children.

Example:

```javascript
var Table = Reactable.Table,
    Tr = Reactable.Tr;

React.renderComponent(
    <Table className="table" id="table">
        <Tr>
            <Td column="Name" data="Griffin Smith">
                <b>Griffin Smith</b>
            </Td>
            <Td column="Age">18</Td>
        </Tr>
        <Tr>
            <Td column="Name">Lee Salminen</Td>
            <Td column="Age">23</Td>
        </Tr>
        <Tr>
            <Td column="Position">Developer</Td>
            <Td column="Age">28</Td>
        </Tr>
    </Table>,
    document.getElementById('table')
);
```

### Pagination

You can also use pagination, by just specifying an `itemsPerPage` argument to the
`<Table>` component. For example:

```javascript
<Table className="table" data={[
    { Name: 'Griffin Smith', Age: '18' },
    { Age: '23',  Name: 'Lee Salminen' },
    { Age: '28', Position: 'Developer' },
    { Name: 'Griffin Smith', Age: '18' },
    { Age: '30',  Name: 'Test Person' },
    { Name: 'Another Test', Age: '26', Position: 'Developer' },
    { Name: 'Third Test', Age: '19', Position: 'Salesperson' },
    { Age: '23',  Name: 'End of this Page', Position: 'CEO' },
]} itemsPerPage={4} />
```

### Sorting

To enable sorting on all columns, just specify `sortable={true}` on the `<Table>`
component. For further customization, ie disabling sort or using a custom sort function
on a per-column basis, you can pass an array to `sortable`, which contains either string
column names or column objects.

We've pre-built some sort functions for you.

- `CaseInsensitive` will sort strings alphabetically regardless of capitalization (e.g. Joe Smith === joe smith)
- `Date` will sort dates using JavaScript's native Date parser (e.g. 4/20/2014 12:05 PM)
- `Currency` will sort USD format (e.g. $1,000.00)
- `Numeric` will parse integer-like strings as integers (e.g. "1")

To specify a custom sort function, use the following structure for the column object:

```javascript

{column: 'Column Name', sortFunction: function(a, b){} }
```

You can also specify a default sort by passing in either a column name by itself, or an object
with a column and a `direction` paramenter of either `asc` or `desc`.
If no direction is specified, the default sort will be ascending.  Example:

```javascript

{column: 'Column Name', direction: 'asc' }
```

Combined example:

```javascript
<Table className="table" id="table" data={[
    { Name: 'Lee Salminen', Age: '23', Position: 'Programmer'},
    { Name: 'Griffin Smith', Age: '18', Position: 'Engineer'},
    { Name: 'Ian Zhang', Age: '28', Position: 'Developer'}
]}
sortable={[
    {
        column: 'Name',
        sortFunction: function(a, b){
            // Sort by last name
            var nameA = a.split(' ');
            var nameB = b.split(' ');

            return nameA[1].localeCompare(nameB[1]);
        }
    },
    'Age',
    'Position'
]}
defaultSort={{column: 'Age', direction: 'desc'}}/>
```
### Filtering

You can do simple case-insensitive filtering by specifying a filterable property on the table.  This
property should contain a list of columns which the filter is performed on.  If the filterable property
is provided, then an input box with class reactable-filter-input will be prepended to the thead of the table.

Example:

```javascript
<Table className="table" id="table" data={[
    {'State': 'New York', 'Description': 'this is some text', 'Tag': 'new'},
    {'State': 'New Mexico', 'Description': 'lorem ipsum', 'Tag': 'old'},
    {'State': 'Colorado', 'Description': 'new description that shouldn\'t match filter', 'Tag': 'old'},
    {'State': 'Alaska', 'Description': 'bacon', 'Tag': 'renewed'},
]} filterable={['State', 'Tag']} />
```