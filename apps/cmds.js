

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
    "not a valid command. type help (or git help in git) for some commands."
  ]

  const gitprompts = [
    ["git add"],
     [
      "git commit", "git commit m"
    ],
    ["git push"],
    ["git help"]
  ]

  const gitreplies = [
    ["added"],
    ["1 file changed, 5 insertions(+), 2 deletions(-)", 
    "3 files changed, 75 insertions(+), 20 deletions(-)", 
    "2 files changed, 15 insertions(+), 25 deletions(-)"
    ],
    [`Enumerating objects: 11, done.
    Counting objects: 100% (11/11), done.
    Delta compression using up to 16 threads
    Compressing objects: 100% (7/7), done.
    Writing objects: 100% (7/7), 3.01 KiB | 1.51 MiB/s, done.
    Total 7 (delta 4), reused 0 (delta 0), pack-reused 0
    remote: Resolving deltas: 100% (4/4), completed with 4 local objects.
    To github.com:alibaba/????.git
       3e24ac..1d41b22  main -> main
    `],
    [`additional git commands currently:
    - git add
    - git commit
    - git push`]
]

