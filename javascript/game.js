const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {}

function startGame(){
  state = {}
  showTextNode(1)
}
/This function reads how many buttons are needed and will remove them if they are not needed./
function showTextNode(textNodeIndex){
const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
textElement.innerText = textNode.text
while (optionButtonsElement.firstChild) {
  optionButtonsElement.removeChild(optionButtonsElement.firstChild)
}
textNode.options.forEach(option => {
  if (showOption(option)) {
    const button = document.createElement('button')
    button.innerText = option.text
    button.classList.add('btn')
    button.addEventListener('click', () => selectOption(option))
    optionButtonsElement.appendChild(button)
  }
})
}

function showOption(option){
  return option.requiredState == null || option.requiredState(state)
}

/This function can assign objects that the player is holding and if the textnode is 0 or less it restarts the game./
function selectOption(option){
  const nextTextNodeId = option.nextText
    if (nextTextNodeId <= 0) {
      return startGame()
    }
    state = Object.assign(state, option.setState)
    showTextNode(nextTextNodeId)

}
/this allows each text and button option to be called apon./
const textNodes = [
  {
    id: 1,
    text:'Borg wakes up on top of a mountain and follows the bridges across until he reaches two different pathways.',
    options: [
      {
        text: 'Follow top bridge',
        nextText: 2
      },
      {
        text: 'Follow bottom bridge',
        nextText: 3
      }
    ]
  },
  {
    id: 2,
    text:'Borg can enter through the door or turn back and choose again.',
    options:[
      {
        text: 'Enter the dungeon',
        nextText: 4
      },
      {
        text: 'Turn back & choose again',
        nextText: 1
      }
    ]
  },
  {
    id: 3,
    text:'Borg can enter through the door or turn back and choose again.',
    options:[
      {
        text: 'Enter the dungeon',
        nextText: 5
      },
      {
        text: 'Turn back & choose again',
        nextText: 1
      }
    ]
  },
  {
    id: 4,
    text:'Borg notices a key is needed to enter the next room. Borg notices their is a door to his left that may hold the key.',
    options:[
      {
        text: 'Enter the side room',
        nextText: 6
      },
      {
        text: 'Turn back',
        nextText: 1
      }
    ]
  },
  {
    id: 5,
    text:'Borg enters into a room where he notices a sword sitting on the floor.',
    options:[
      {
        text: 'Pick up sword',
        setState: { sword: true },
        nextText: 7
      },
      {
        text: 'leave sword & continue',
        nextText: 7
      }
    ]
  },
  {
    id: 6,
    text:'Borg sets his eyes upon a key to open the door.',
    options:[
      {
        text: 'Take Key',
        setState: {Key:true},
        nextText: 8
      },
      {
        text: 'Turn back',
        nextText: 4
      }
    ]
  },
  {
    id: 7,
    text:'Borg continues on along the rooms big hall where hes is then met with an open door.',
    options:[
      {
        text: 'go through',
        nextText: 9
      }
    ]
  },
  {
    id: 8,
    text:'Borg steps back into the room with the locked door.',

    options:[
      {
        text: 'open door',
        setState: { key: false },
        nextText: 5
      }
    ]
  },
  {
    id: 9,
    text:'Borg enters and sees a figure in the distance.',
    options:[
      {
        text: 'Attack the stranger ',
        nextText: 10
      },
      {
        text: 'Ask the strangers name & befriends',
        nextText: 11
      },
      {
        text: 'Ignore & continue',
        nextText: 13
      }
    ]
  },
  {
    id: 10,
    text:'Borg attacks the stranger and is quickily defeated by the stranger',
    options:[
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 11,
    text:'Borg learns the strangers name to be Tim and asks Tim to help him through his journey which he agrees to help',
    options:[
      {
        text: 'Continue on',
        nextText: 12
      }
    ]
  },
  {
    id: 12,
    text:'Borg and Tim continue through to the next room where they have the option of taken a rope or bridge across',
    options:[
      {
        text: 'Rope',
        nextText: 14
      },
      {
        text:'Bridge',
        nextText: 16
      }
    ]
  },
  {
    id: 13,
    text:'Borg continues on alone to the next room where he has the option of taken a rope or bridge.',
    options:[
      {
        text: 'Rope',
        nextText: 15
      },
      {
        text:'Bridge',
        nextText: 17
      }
    ]
  },
  {
    id: 14,
    text:'The rope snaps and both Borg & Tim fall as their is to much weight.',
    options:[
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 15,
    text:'Borg uses the rope and successfully gets across',
    options:[
      {
        text: 'Continue',
        nextText: 19
      }
    ]
  },
  {
    id: 16,
    text:'Borg & Tim gets across the bridge successfully.',
    options:[
      {
        text: 'Continue',
        nextText: 18
      }
    ]
  },
  {
    id: 17,
    text:'Borg continues on alone across the bridge and gets over successfully.',
    options:[
      {
        text: 'Continue',
        nextText: 19
      }
    ]
  },
  {
    id: 18,
    text:'Borg & Tim continue onto the next room where they reach a big door and four side doors one with a key to the room.',
    options:[
      {
        text: 'Go through door one',
        nextText: 20
      },
      {
        text: 'Go through door two',
        nextText: 22
      },
      {
        text: 'Go through door three',
        nextText: 24
      },
      {
        text: 'Go through door four',
        nextText: 26
      }
    ]
  },
  {
    id: 19,
    text:'Borg continues onto the next room where they reach a big door and four side doors one with a key to the room.',
    options:[
      {
        text: 'Go through door one',
        nextText: 21
      },
      {
        text: 'Go through door two',
        nextText: 23
      },
      {
        text: 'Go through door three',
        nextText: 25
      },
      {
        text: 'Go through door four',
        nextText: 27
      }
    ]
  },
  {
    id: 20,
    text: 'Borg & Tim check the room, Tim finds a shield which he takes.',
    options:[
      {
        text: 'Go back',
        nextText: 18
      }
    ]
  },
  {
    id: 21,
    text: 'Borg checks the first room, but their is nothing there.',
    options:[
      {
        text: 'Go back',
        nextText: 19
      }
    ]
  },
  {
    id: 22,
    text:'Borg & Tim checks the second room, but theirs nothing in here.',
    options:[
      {
        text: 'Go back',
        nextText: 18
      }
    ]
  },
  {
    id: 23,
    text:'Borg checks the second room, their is a shield but Borg has no need for it.',
    options:[
      {
        text: 'Go back',
        nextText: 19
      }
    ]
  },
  {
    id: 24,
    text:'Borg & Tim checks the third room and they find the key.',
    options:[
      {
        text: 'Continue',
        nextText: 28
      }
    ]
  },
  {
    id: 25,
    text:'Borg checks the third room but theirs nothing there.',
    options:[
      {
        text: 'Go back',
        nextText: 19
      }
    ]
  },
  {
    id: 26,
    text:'Borg & Tim check the fourth room but their is nothing there.',
    options:[
      {
        text: 'Go back',
        nextText: 18
      }
    ]
  },
  {
    id: 27,
    text:'Borg checks the fourth room and finds the key.',
    options:[
      {
        text: 'Continue',
        nextText: 29
      }
    ]
  },
  {
    id: 28,
    text:'Tim uses the key and the door opens.',
    options:[
      {
        text: 'Continue through',
        nextText: 30
      }
    ]
  },
  {
    id: 29,
    text:'Borg uses the key and the door opens.',
    options:[
      {
        text: 'Continue through',
        nextText: 31
      }
    ]
  },
  {
    id: 30,
    text:'Borg & Tim enter and decided how they are going to take on the final boss.',
    options:[
      {
        text: 'Normal Attack',
        nextText: 32
      },
      {
        text: 'Stealth Attack',
        nextText: 34
      },
      {
        text:'Befriend Final Boss',
        nextText: 36
      }
    ]
  },
  {
    id: 31,
    text:'Borg enters the room how should borg attack the final boss.',
    options:[
      {
        text: 'Normal Attack',
        nextText: 33
      },
      {
        text:'Stealth Attack',
        nextText: 35
      },
      {
        text:'Befriend Final Boss',
        nextText: 37
      }
    ]
  },
  {
    id:32,
    text:'Borg & Tim have successfully defeated the Final Boss',
    options:[
      {
        text:'Go to the portal room',
        nextText: 38
      }
    ]
  },
  {
    id:33,
    text:'Borg tries to attack the Final Boss but is defeated.',
    options:[
      {
        text:'Restart',
        nextText: -1
      }
    ]
  },
  {
    id:34,
    text:'Borg & Tim have successfully defeat the Final Boss but Borg then betrays Tim and defeats Tim ',
    options:[
      {
        text:'Go to the portal room',
        nextText: 38
      },
      {
        text:'Become the new boss of the tower.',
        nextText: -1
      }
    ]
  },
  {
    id:35,
    text:'Borg sneak attacks and successfully defeats the Final Boss.',
    options:[
      {
        text:'Go to the portal room',
        nextText: 38
      }
    ]
  },
  {
    id:36,
    text:'Borg & Tim have successfully befriended the Final Boss, they all now can leave.',
    options:[
      {
        text:'Go to the portal room',
        nextText: 38
      }
    ]
  },
  {
    id:37,
    text:'Borg successfully befriends the Final Boss, They can now both leave ',
    options:[
      {
        text:'Go to the portal room',
        nextText: 38
      }
    ]
  },
  {
    id:38,
    text:'Congratulations you have finished SkyDungeon you can restart or press the back button to return to the home page',
    options:[
      {
        text:'Restart',
        nextText: -1
      },

    ]
  }
]

startGame()
