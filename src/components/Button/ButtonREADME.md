# Button Component

The `Button` component is a reusable and customizable button element for React applications. It supports various roles such as keyboard keys, filter, and sort buttons. You can either display a label or an icon, depending on the use case.

## Props

| Prop Name     | Type                                           | Default        | Description                                                                                                  |
|---------------|------------------------------------------------|----------------|--------------------------------------------------------------------------------------------------------------|
| `label`       | `string`                                       | -              | **(Required)** The text displayed on the button                                                              |
| `onClick`     | `() => void`                                   | -              | A callback function to handle button clicks                                                                  |
| `type`        | `"button" \| "submit" \| "reset"`              | `"button"`     | The type of button, determining its behavior in forms                                                        |
| `disabled`    | `boolean`                                      | `false`        | If `true`, the button will be disabled and unclickable                                                       |
| `buttonRole`  | `"keyboard" \| "filter" \| "sort"`             | -              | Specifies the role of the button, used for specialized buttons like keyboard keys, filters, or sorting        |
| `icon`        | `ReactNode`                                    | -              | Icon to be displayed if no label is present                                                                  |
| `variant`     | `"primary" \| "secondary"`                     | `"primary"`    | Defines the button's visual style                                                     |
| `width`       | `"default" \| "stretch" \| "stretch-half" \| "square"` | `"stretch"`    | Defines the width of the button                                                                              |
| `className`   | `string`                                       | -              | Additional CSS classes for custom styling                                                                    |
| `testId`      | `string`                                       | -              | An optional prop for testing purposes                                                                        |

## Example Usage

### Basic Button with Label

```tsx
import Button from './Button'

const App = () => {
    const handleClick = () => {
        console.log('Button clicked!')
    }

    return (
        <Button
            label="Submit"
            onClick={handleClick}
            variant="primary"
            width="default"
            testId="submit-button"
        />
    )
}
```

### Icon Only Button

```tsx
import Button from './Button'
import { FiFilter } from 'react-icons/fi' // import icom from icon library

const App = () => {
    return (
        <Button
            label=""
            icon={<FiFilter />}
            buttonRole="filter"
            variant="secondary"
            width="square"
            testId="filter-button"
        />
    )
}
```