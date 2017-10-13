import React, { Component } from 'react';
import StyleClass           from './exampleParameter.less';
import PropTypes            from 'prop-types';

class ExampleParameter extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    };



    render() {
        let _this = this;
        const { isShow , tableList} = this.props;
        let paraTable = tableList && tableList.length > 0?
            tableList.map((tableListTD,i)=>{
            return (
            <tr key = {i}>
                <td style = {{color:"#266d90"}}>{tableListTD[0]}</td>
                <td>{tableListTD[1]}</td>
                <td>{tableListTD[2]}</td>
                <td>{tableListTD[3]}</td>
            </tr>);})
        :null
        return  isShow ? <div className = {StyleClass.container}>
            <table className = {StyleClass.parameterTable}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Default</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {paraTable}
                </tbody>
            </table>
        </div>: null;
    }
}


    ExampleParameter.propTypes = {
        isShow:         PropTypes.bool,
        tableList:      PropTypes.array
    };

    ExampleParameter.defaultProps = {
        isShow:         true,
        tableList:      []
    };


export default ExampleParameter;