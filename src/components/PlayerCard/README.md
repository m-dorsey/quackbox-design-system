# PlayerCard Component

The `PlayerCard` component is a reusable component that represents a player’s card in the Controller Connect Screen. It displays the player number, connection status, and includes an icon and a button for interaction.

## Props

| Prop Name     | Type                                           | Default        | Description                                                                                                  |
|---------------|------------------------------------------------|----------------|--------------------------------------------------------------------------------------------------------------|
| `playerNumber`       | `number`                                       | -              | **(Required)** The player's number that will be displayed on the card                                                              |
| `isConnected`     | `boolean`                                   | `false`              | Indicates whether the player is connected or not                                                                  |
| `onClick`        | `"() => void"`             | -     | 	A callback function that is triggered when the player card is clicked                                                        |
| `iconPath`    | `string`                                      | `"src/assets/duckConnected.png"`        | The path to the icon that will be shown when the player is connected                                                       |                                                      |
| `testId`      | `string`                                       | -              | An optional prop for testing purposes                                                                        |

## Example Usage

```tsx
import PlayerCard from './PlayerCard';

const handleCardClick = () => {
    console.log('Player card clicked!');
};

const App = () => {
    return (
        <PlayerCard
            playerNumber={1}
            isConnected={true}
            onClick={handleCardClick}
            iconPath="src/assets/customIcon.png"
            testId="player-card-1"
        />
    );
};

export default App;
```
