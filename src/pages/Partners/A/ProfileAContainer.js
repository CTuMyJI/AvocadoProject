import { connect } from 'react-redux';
import { ProfileA } from './ProfileA';

let mapStateToProps = (state) => {
    return {
        avoData: state.avoData
    }
}
let mapDispatchToProps = () => {
    return {

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProfileA)