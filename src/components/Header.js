import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title, onAdd, showAdd}) => {
   return (
    <header className='header'>
        <h1>{title}</h1>
    <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'close' : 'Add'} onClick={onAdd}/>
    {/* <Button color='red' text='Hello2'/>
    <Button color='blue' text='Hello3'/> */}
    </header>
  )
}

Header.defaultProps = {
    title: 'Task Tracker'
}

Header.propTypes = {
    title: PropTypes.string,
}

//you can style stuff inline if you want to 
//const headingStyle = {
//     color: 'red',
//     backgroundColor: 'black'
// }

export default Header