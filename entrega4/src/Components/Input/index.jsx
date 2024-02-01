import { InputDiv } from './styles';

function Input(props) {
	return (
		<>
			<InputDiv
				type={props.tipo}
				placeholder={props.content}
				onChange={props.onChange}
				id={props.id}
				value={props.value}
			></InputDiv>
		</>
	);
}

export default Input;