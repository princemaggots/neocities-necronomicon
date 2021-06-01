

 // Options the user could type in
 const prompts = [
    ["ls", "dir"],
    ["cd"],
    ["hostname"],
    ["wizard"],
    ["medjed", "locate -i medjed", "locate medjed"],
    ["sophie"],
    [
      "leblanc"
    ],
    ["akira", "joker", "ren", "kurusu"],
    ["mona", "morgana", "kitty", "cat"],
    ["yusuke", "inari"],
    ["mwehehe", "mwhehehe", "hehehe"],
    ["help", "help pls"],
    ["cat hiddentxt", "less hiddentxt", "more hiddentxt"]
  ]
  
  // Possible responses, in corresponding order
  
  const replies = [
    [`DIRECTORY OF C:\\Users\\alibaba
    
    Desktop
    Documents
    Downloads
    Pictures
    Videos
    Music
    hidden.txt`],
     [
      "C:\Users\alibaba"
    ],
    [
      "s4kur4", "sakura"
    ],
    ["wooosh *magic spell*", "*magic*", "the wizzer,,," ],
    ["We are Medjed. We are unseen. We will eliminate evil."],
    ["hehehe! hi ~"],
    ["there are currently 2 customers at leblanc", 
    "akira is currently at leblanc!", 
    "there are currently 5 customers at leblanc",
    "there are currently 3 customers at leblanc",
    "there are currently 4 customers at leblanc",
    "sojiro has just left leblanc!",
    "akira has just left leblanc!",
    "ryuji has just entered leblanc!",
    "yusuke has just entered leblanc!",
    "ann has just entered leblanc!",
    "haru has just entered leblanc!",
    "kasumi has just entered leblanc!",
    "makoto has just entered leblanc!",
    "the rest of the phantom thieves have entered leblanc"
    ],
    ["akira is currently at leblanc!", 
    "akira is currently in shibuya!", 
    "akira is currently in kanda!", 
    "akira is currently home :((((",
    "akira is currently in shinjuku!",
    "akira is currently in yogen-jaya!",
    "akira is at the doctors",
    "akira is currently in ogikubo!",
    "akira is currently at kosei",
    "akira is currently at shujin",
    "akira is currently at inokashira park",
    "akira is currently at ???"
    ],
    ["meow~!"],
    ["stupid inari... :)"],
    ["MWEHEHE!"],
    [` LIST OF AVAILABLE COMMANDS
        - ls, dir
        - cd
        - hostname
        - wizard
        - medjed 
        - locate -i medjed, locate medjed
        - sophie
        - leblanc
        - akira, joker, ren, kurusu
        - yusuke
        - morgana
        - kitty
        - some more various cmds :)
    `
    ],
    [`mwhehehehe! you have found my hidden file :3
    here are some beloved links:
    www.youtube.com/watch?v=GpYlmkzlfOk
    www.youtube.com/watch?v=0Ntiphuey8g
    www.youtube.com/watch?v=ux6sXIUuFDI
    the1980underground.neocities.org/
    gifcities.org/
    `]
  ]
  
  // Random for any other user input
  
  const alternative = [
    "not a valid command. type help for some commands."
  ]
  


