# Gameplay

PyraMaze is 3D adventure puzzle platformer. The driver of the player's motivation to play is the mystery of the game's lore. They are motivated because the mystery is so enticing, they are willing to get lost in mazes, perform tricky platforming and complete timed puzzles. The satisfaction of finishing a puzzle is secondary to the satisfaction of finding more information about the game's lore. 

## Abilities

### Moonlight
Used to activate various puzzle elements. The first ability gained. Required for all other abilities. Glorified "use" button.
### Fireball 
Toss a fireball into an urn. This is tricky because the fireball is a physical ball that will bounce and roll. It can also light flame-able objects. Goes out instantly in the snow.
### Birds Eye
Ability allows you to see things from a bird's eye perspective. Helps players navigate the various mazes and is required in certain mazes with visual puzzle elements.
### Ice Grapple
Will launch the player towards any icy surfaces. 

1) Both ends are together and spinning when the player is targeting. small snowflake particles are spawning from the player's hands. If the Target is not lined up properly or no Targets are available, the snowflake pieces are spinning slowly and there are less snowflake particles.
2) Once Target is lined up & the player presses the Ice Grapple button, the smaller end moves to the target, and the ice crystal in the middle is visible between the target and the player (sortof like in the pic above). A burst of particles emits once the target end starts moving. The entire sequence takes 0.1 - 0.25 seconds.
3) As the player reels towards the target, the entire system gets smaller as the player gets closer. 
4) once the player cancels or reaches the target, the entire system scales to 0 and a snowflake particle affect is seen.

### Gaining New Abilities
Once you gain a new ability an animation plays that illustrates how you will use it. 

## Collectables

### Professor's Notes
Left by the Professor for the Player to read. Sometimes they read like a journal and sometimes it seems like the Prof. is writing to the Player directly. Anytime the Prof. mentions "You" in these notes, they are referring to the Player.

### Warp's Eyes
Warp has Eyes. One for each instance of Warp. These Eyes keep Warp tethered to this reality. If the player comes across a Blinded Warp, then Warp will be limited and seem broken. If the player can collect an Eye and bring it to a Blinded Warp, they can restore Warps vision. The player needs to be careful about 


## Warps

## Controls

- Dpad Left - Moonlight
- Dpad Right - Fireball
- Dpad Up - Birds Eye
- Dpad Down - Ice Grapple
- Left Stick - Move
- Right Stick - Look
- A (XBOX) - Jump / Select
- Right Trigger - Run
- Start - Open Menu

## UI
### Barker Screen
Cameras zoom around the intro level. They fade in and out of different angles. The whole thing should be controlled by DScript.
The game logo is displayed.
Four choices are available.
1) Play Game
2) Reset Game
    - Are you sure? Y/N
3) Controls (readonly)
4) Exit

### Pause Menu
The Camera orbits the player in the pause menu. All animations should freeze. 



## Save State