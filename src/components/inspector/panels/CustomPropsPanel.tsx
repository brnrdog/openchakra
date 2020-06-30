import React, { memo, useState, FormEvent, ChangeEvent, useRef } from 'react'
import { useInspectorState } from '../../../contexts/inspector-context'
import { getSelectedComponent } from '../../../core/selectors/components'
import { useSelector } from 'react-redux'
import { IoIosFlash } from 'react-icons/io'
import {
  IconButton,
  Flex,
  Box,
  SimpleGrid,
  InputGroup,
  InputRightElement,
  Input,
  ButtonGroup,
} from '@chakra-ui/core'
import useDispatch from '../../../hooks/useDispatch'
import { useForm } from '../../../hooks/useForm'
import { EditIcon, SmallCloseIcon } from '@chakra-ui/icons'

const SEPARATOR = '='

const CustomPropsPanel = () => {
  const dispatch = useDispatch()
  const inputRef = useRef<HTMLInputElement>(null)

  const activePropsRef = useInspectorState()
  const { props, id } = useSelector(getSelectedComponent)
  const { setValue } = useForm()

  const [quickProps, setQuickProps] = useState('')
  const [hasError, setError] = useState(false)

  const onDelete = (propsName: string) => {
    dispatch.components.deleteProps({
      id,
      name: propsName,
    })
  }

  const activeProps = activePropsRef || []
  const customProps = Object.keys(props).filter(
    propsName => !activeProps.includes(propsName),
  )

  return (
    <>
      <form
        onSubmit={(event: FormEvent) => {
          event.preventDefault()

          const [name, value] = quickProps.split(SEPARATOR)

          if (name && value) {
            setValue(name, value)
            setQuickProps('')
            setError(false)
          } else {
            setError(true)
          }
        }}
      >
        <InputGroup mb={3} boxSize="sm">
          <InputRightElement
            children={<Box as={IoIosFlash} color="gray.300" />}
          />
          <Input
            ref={inputRef}
            isInvalid={hasError}
            value={quickProps}
            placeholder={`props${SEPARATOR}value`}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              setQuickProps(event.target.value)
            }
          />
        </InputGroup>
      </form>

      {customProps.map((propsName, i) => (
        <Flex
          key={propsName}
          alignItems="center"
          px={2}
          bg={i % 2 === 0 ? 'white' : 'gray.50'}
          fontSize="xs"
          justifyContent="space-between"
        >
          <SimpleGrid width="100%" columns={2} spacing={1}>
            <Box fontWeight="bold">{propsName}</Box>
            <Box>{props[propsName]}</Box>
          </SimpleGrid>

          <ButtonGroup display="flex" boxSize="xs" isAttached>
            <IconButton
              onClick={() => {
                setQuickProps(`${propsName}=`)
                if (inputRef.current) {
                  inputRef.current.focus()
                }
              }}
              variant="ghost"
              boxSize="xs"
              aria-label="edit"
              //@ts-ignore
              icon={<EditIcon />}
            />
            <IconButton
              onClick={() => onDelete(propsName)}
              variant="ghost"
              boxSize="xs"
              aria-label="delete"
              //@ts-ignore
              icon={<SmallCloseIcon />}
            />
          </ButtonGroup>
        </Flex>
      ))}
    </>
  )
}

export default memo(CustomPropsPanel)
