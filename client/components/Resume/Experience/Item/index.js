import Moment from 'moment';

const formatEndDate = (date) => {
  return date ? formatDate(date) : 'Present'
}

const formatDate = (date) => {
  return Moment(date).format('Do MMMM YYYY');
}

const dates = (startDate, endDate) => {
  return startDate ? 
    <p>{ formatDate(startDate) } - { formatEndDate(endDate) }</p>
  :
    ''
}

const ExperienceItem = ({ name, role, startDate, endDate, description }) => {
  return (
  	<div>
	  	<h3>{name} - {role}</h3>
      { dates(startDate, endDate) }
	  	<p>{description}</p>
  	</div>
  );
}

export {
  ExperienceItem
}