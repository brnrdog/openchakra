import React, { memo } from 'react'
import usePropsSelector from '../../../../hooks/usePropsSelector'
import SwitchControl from '../../controls/SwitchControl'
import { Input } from '@chakra-ui/core'
import { useForm } from '../../../../hooks/useForm'
import FormControl from '../../controls/FormControl'

const RadioGroupPanel = () => {
  const { setValueFromEvent } = useForm()
  const spacing = usePropsSelector('spacing')

  return (
    <>
      <FormControl label="Spacing">
        <Input
          boxSize="sm"
          value={spacing || ''}
          name="spacing"
          onChange={setValueFromEvent}
        />
      </FormControl>
      <SwitchControl label="Inline" name="isInline" />
    </>
  )
}

export default memo(RadioGroupPanel)
