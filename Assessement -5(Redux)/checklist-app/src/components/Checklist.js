
import React from 'react';
import { connect } from 'react-redux';
import { checkItem, uncheckItem } from '../actions/checklistActions'; // Corrected import path

const Checklist = ({ options, checkedItems, checkItem, uncheckItem }) => {
    return (
        <div>
            <h2>Checklist</h2>
            {options.map((option, index) => (
                <div key={index}>
                    <input
                        type="checkbox"
                        name={option}
                        checked={checkedItems[option] || false}
                        onChange={(e) => {
                            if (e.target.checked) {
                                checkItem(option);
                            } else {
                                uncheckItem(option);
                            }
                        }}
                    />
                    <label>{option}</label>
                </div>
            ))}
            <h3>Selected Options:</h3>
            <ul>
                {options.map((option, index) => (
                    <li key={index}>
                        {checkedItems[option] ? `${option}: YES` : `${option}: NO`}
                    </li>
                ))}
            </ul>
        </div>
    );
};

const mapStateToProps = (state) => ({
    checkedItems: state.checklist.checkedItems,
});

export default connect(mapStateToProps, { checkItem, uncheckItem })(Checklist);
