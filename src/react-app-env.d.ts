/// <reference types="react-scripts" />;
declare module 'prettier/standalone'
declare module 'coloreact'
declare module 'browser-nativefs'

type ComponentType =
  | 'AspectRatioBox'
  | 'Badge'
  | 'Box'
  | 'Button'
  | 'Breadcrumb'
  | 'Icon'
  | 'IconButton'
  | 'Image'
  | 'Text'
  | 'Progress'
  | 'AvatarBadge'
  | 'AvatarGroup'
  | 'Avatar'
  | 'Checkbox'
  | 'Link'
  | 'Spinner'
  | 'CloseButton'
  | 'Divider'
  | 'Textarea'
  | 'CircularProgress'
  | 'Heading'
  | 'Tag'
  | 'Switch'
  | 'SimpleGrid'
  | 'Alert'
  | 'AlertIcon'
  | 'AlertTitle'
  | 'AlertDescription'
  | 'Flex'
  | 'Stack'
  | 'Accordion'
  | 'AccordionItem'
  | 'AccordionHeader'
  | 'AccordionPanel'
  | 'AccordionIcon'
  | 'FormControl'
  | 'FormLabel'
  | 'FormHelperText'
  | 'FormErrorMessage'
  | 'TabList'
  | 'TabPanel'
  | 'TabPanels'
  | 'Tab'
  | 'Tabs'
  | 'Code'
  | 'Editable'
  | 'Menu'
  | 'NumberInput'
  | 'Radio'
  | 'RadioGroup'
  | 'Select'
  | 'List'
  | 'ListItem'
  | 'ListIcon'
  | 'Input'
  | 'InputGroup'
  | 'InputLeftAddon'
  | 'InputRightAddon'
  | 'InputLeftElement'
  | 'InputRightElement'
  | 'Grid'
  | 'BreadcrumbItem'
  | 'BreadcrumbLink'

type MetaComponentType =
  | 'FormControlMeta'
  | 'AccordionMeta'
  | 'ListMeta'
  | 'AlertMeta'
  | 'InputGroupMeta'
  | 'BreadcrumbMeta'

interface IComponent {
  children: string[]
  type: ComponentType
  parent: string
  id: string
  props: any
  rootParentType?: ComponentType
  componentName?: string
}

interface IComponents {
  [name: string]: IComponent
}

interface IPreviewProps {
  component: IComponent
}

interface ComponentItemProps {
  id: string
  label: string
  type: ComponentType
  isMoved?: boolean
  isChild?: boolean
  isMeta?: boolean
  soon?: boolean
  rootParentType?: ComponentType
}
