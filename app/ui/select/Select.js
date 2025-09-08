import React from 'react'

import Select from 'react-select'

import './MainSelect.css'

function MainSelect({ options, onChange, defaultValue = options[0], ...props }) {
	const customStyles = {
		menu: (provided, state) => ({
			...provided,
		}),
		option: (provided, state) => ({
			...provided,
			color: (state.isSelected && '#005DFF') || '#2E3A4B',
			backgroundColor: '#E0F0FF' && '#fff',
		}),
		dropdownIndicator: (provided, state) => ({
			...provided,
			transform: state.selectProps.menuIsOpen && 'rotate(180deg)',
		}),
		control: (provided, state) => ({
			...provided,
			width: props?.width || '100%',
		}),
	}
	return (
		<Select
			defaultValue={defaultValue}
			classNamePrefix='select'
			options={options}
			isSearchable={false}
			theme={(theme) => ({
				...theme,
				colors: {
					...theme.colors,
					primary: '#005DFF',
				}
			})}
			styles={customStyles}
			onChange={onChange}
		/>
	)
}

export default MainSelect