import React, { Component } from 'react';
import _ from 'lodash';

import List from './list';

export default class App extends Component {
    constructor(props) {
        super(props);
        const data = [
            {
                rowNumber: 1,
                id: 123213,
                sources: [{ name: 'Vendor A' }, { name: 'Vendor B' }, { name: 'Vendor C' }],
                name: 'Shovel',
                additionalDescription: 'Rad Shovel XYZ',
                rowClass: 'text-muted'
            },
            {
                rowNumber: 2,
                id: 123214,
                sources: [{ name: 'Vendor D' }],
                name: 'Rake',
                additionalDescription: 'Crazy Good Rake JKL',
                rowClass: 'text-muted'
            },
        ];
        this.addTenRows = this.addTenRows.bind(this);
        this.state = { data };
    }
    getRow(name) {
        return {
            rowNumber: 1,
            id: 123215,
            sources: [{ name: 'Vendor E' }],
            name,
            additionalDescription: 'New Product ABC',
            rowClass: 'text-muted'
        };
    }
    addTenRows() {
        const newRows = _.map([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], () =>
            this.getRow('added row')
        );
        const existingData = _.cloneDeep(this.state.data);
        const data = _.concat(existingData, newRows);
        this.setState({ data });
    }
    render() {
        return (
          <div>
            <List rows={this.state.data} />
            <button className="btn btn-primary" onClick={this.addTenRows}>More rows, please</button>
          </div>
        );
    }
}
