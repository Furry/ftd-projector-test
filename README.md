# ftd-projector-test

## Instructions:
In a basic construct with 1 hologram projector and a lua box, paste the projectorLua.lua contents in it;

Start the NodeJS localhost server with: ``node ./start.js``

Once active the projector will render a new image ~24 times a second, or as frequently as Update is called within the script. Expected outcome is a dynamicly updating image, resulting outcome is just the same until From The Depths caps out memory usage and crashes.
