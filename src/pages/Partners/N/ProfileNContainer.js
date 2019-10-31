import { connect } from 'react-redux';
import { ProfileN } from './ProfileN';

let mapStateToProps = (state) => {
    return {
        notData: state.notData
    }
}
let mapDispatchToProps = () => {
    return {

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProfileN)