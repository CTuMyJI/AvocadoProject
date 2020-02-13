import React from 'react'
import styles from './Converter.module.css'

const unitNames = {
    m: 'Meters',
    cm: 'Centimeters'
};

function toMeters(centimeters) {
    return (centimeters / 100);
}

function toCentimeters(meters) {
    return (meters * 100);
}

function tryConvert(value, convert) {
    const input = parseFloat(value);
    if (Number.isNaN(input)) {
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

class ValueInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.onValueChange(e.target.value);
    }

    handleSelectChange(e) {
        this.props.onSelectChange(e.target.value);
    }

    render() {
        const value = this.props.value;
        const unit = this.props.unit;
        const selectedUnit = this.props.selectedUnit;
        return (
            <fieldset>
                <legend>{unitNames[unit]}:</legend>
                <input className={styles.convertInput} value={value} onChange={this.handleChange} placeholder='Enter value' />
                <span className={styles.convertSpan}>
                    <select className={styles.convertSelect} value={selectedUnit} onChange={this.handleSelectChange}>
                    <option value="meters">Meters (m)</option>
                    <option value="centimeters">Centimeters (cm)</option>
                    <option value="inches">Inches (in)</option>
                    <option value="feet">Feet (ft)</option>                     
                    </select>
                </span>
            </fieldset>
        );
    }
}

class Converter extends React.Component {
    constructor(props) {
        super(props);
        this.handleMetersChange = this.handleMetersChange.bind(this);
        this.handleCentimetersChange = this.handleCentimetersChange.bind(this);
        this.handleSelectedUnitChange = this.handleSelectedUnitChange.bind(this);
        this.state = { value: '', unit: 'm', selectedUnit: 'meters' };
    }

    handleMetersChange(value) {
        this.setState({ unit: 'm', value });
    }

    handleCentimetersChange(value) {
        this.setState({ unit: 'cm', value });
    }

    handleSelectedUnitChange(value) {
        this.setState({selectedUnit: value})
    }

    render() {
        const unit = this.state.unit;
        const value = this.state.value;
        const meters = unit === 'cm' && 'in' ? tryConvert(value, toMeters) : value;
        const centimeters = unit === 'm' && 'in' ? tryConvert(value, toCentimeters) : value;

        return (
            <div className={styles.convertWrapper}>
                <h2>LENGTH CONVERTER</h2>
                <div className={styles.convertSideA}>
                    <ValueInput
                        unit="m"
                        value={meters}
                        selectedUnit={this.state.selectedUnit}
                        onValueChange={this.handleMetersChange}
                        onSelectChange={this.handleSelectedUnitChange} />
                </div>
                <div className={styles.convertEquals}>
                    <p>===</p>
                </div>
                <div className={styles.convertSideB}>
                    <ValueInput
                        unit="cm"
                        value={centimeters}
                        onValueChange={this.handleCentimetersChange}
                        onSelectChange={this.handleSelectedUnitChange} />
                </div>
            </div>
        );
    }
}

export default Converter;