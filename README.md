# Stopwatch App

A simple stopwatch application built with React.

## Prerequisites

- Node.js
- npm (Node Package Manager)

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/stopwatch-app.git
    ```
2. Navigate to the project directory:
    ```bash
    cd stopwatch-app
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```

## Usage

1. Start the development server:
    ```bash
    npm start
    ```
2. Open your browser and navigate to `http://localhost:3000`.

## Components

### App
- **File**: `App.js`
- **Description**: The main application component that serves as the root component. It sets the background color and includes the `Stopwatch` component.

### Stopwatch
- **File**: `stopwatch.js`
- **Description**: The main stopwatch component that manages the state of the timer and the running status. It includes the `Display` and `Buttons` sub-components.
- **State Variables**:
  - `isRunning`: Boolean indicating whether the stopwatch is running.
  - `time`: Integer representing the elapsed time in seconds.

### Display
- **File**: `display.js`
- **Description**: A sub-component that displays the elapsed time in HH:MM:SS format.
- **Props**:
  - `time`: Integer representing the elapsed time in seconds.

### Buttons
- **File**: `buttons.js`
- **Description**: A sub-component with buttons to control the stopwatch (start, stop, reset).
- **Props**:
  - `isRunning`: Boolean indicating whether the stopwatch is running.
  - `onStart`: Function to start the stopwatch.
  - `onStop`: Function to stop the stopwatch.
  - `onReset`: Function to reset the stopwatch.

### Index
- **File**: `index.js`
- **Description**: The entry point of the application that renders the `App` component into the DOM.
- **Dependencies**:
  - `react-dom`
  - `bootstrap` (for styling)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.