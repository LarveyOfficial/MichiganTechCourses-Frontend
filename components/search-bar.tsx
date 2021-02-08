import React, {useCallback, useEffect, useRef} from 'react';
import {Input, Container, InputGroup, InputLeftElement} from '@chakra-ui/react';
import {Search2Icon} from '@chakra-ui/icons';

interface ISearchBarProps {
	value: string;
	onChange: (newValue: string) => void;
}

const SearchBar = ({value, onChange}: ISearchBarProps) => {
	const inputRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		inputRef.current?.focus();
	}, []);

	const bubbleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
		onChange(event.target.value);
	}, [onChange]);

	return (
		<Container>
			<InputGroup boxShadow="md" borderRadius="md" size="lg">
				<InputLeftElement
					pointerEvents="none"
					children={<Search2Icon color="gray.300" />}
				/>

				<Input
					ref={inputRef}
					placeholder="Start typing..."
					size="lg"
					autoFocus
					value={value}
					onChange={bubbleChange}
					aria-label="Search for courses or sections"
				/>
			</InputGroup>
		</Container>
	);
};

export default SearchBar;
