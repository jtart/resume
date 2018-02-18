const mapItems = (data) => {
  const dataItems = []

  for (let i = 0; i < data.length; i++) {
    const item = data[i]
    dataItems.push(<p key={`skill__item${i}`}>{ item }</p>)
  }

  return dataItems;
}

const SkillItem = ({itemKey, data}) => {
  return (
  	<div>
      <h3>{ itemKey }</h3>
      <div>
        { mapItems(data) }
      </div>
  	</div>
  );
}

export {
  SkillItem
}