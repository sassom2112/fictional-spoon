# Far Away Packing List App

## Overview
This is a simple **React** application that helps users manage a packing list for trips. The app allows users to add items to their list, track whether they are packed, and remove them as necessary. It includes real-time updates to item status and displays statistics on how many items have been packed and how many remain.

## Features
- **Add Items**: Users can add items to their packing list by entering a description and quantity.
- **Toggle Packed Status**: Users can toggle the packed status of an item with a ✅ or ⬜ button.
- **Remove Items**: Users can remove items from the list with a ❌ button.
- **Statistics**: Displays the total number of items in the list and how many have been packed.
- **Responsive Design**: The app adjusts to different screen sizes for a smooth user experience.

## Components
### 1. **App**
   - Manages the state for the list of items and contains the main logic for adding, removing, and updating items.
   
### 2. **Logo**
   - Displays the app’s logo with a fun emoji-themed title.

### 3. **Form**
   - Allows users to input the description and quantity of new items they need to pack. Includes validation to ensure a non-empty description.
   
### 4. **PackingList**
   - Displays the list of items to be packed, with options to toggle packed status and remove items.

### 5. **Item**
   - Represents a single item in the packing list with buttons for toggling packed status and removing the item.

### 6. **Stats**
   - Displays statistics about the number of total and packed items.

### 7. **Legend**
   - Provides users with a guide on how to interact with the list (toggle packed status or remove an item).

## Installation and Setup
To run the app locally, follow these steps:

### Prerequisites
- **Node.js** installed
