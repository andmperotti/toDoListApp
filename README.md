## To Do Tasks App
Here's a simple and clean-looking app for users to jot down tasks they need to remind themselves to complete. Entries persist on page refresh.

**Link to project:** https://superb-pavlova-3e1efa.netlify.app/

![alt tag](https://i.ibb.co/d7jW8t6/Screenshot-2024-02-09-at-11-50-47-AM.png)

# How It's Made:

**Tech used:** HTML, CSS, JavaScript

I needed an app to cement localStorage usage and this app had been on my own to-do list for a long time, I thought the two were a perfect match.

# Optimizations
I initially wrote this app to just use JavaScript and not LocalStorage, however, what's the use of a temporary to-do list if it gets wiped every time it's refreshed?
I kept all of the old code in the JavaScript file, it's below the current code. I also have comments for my process there as well.
I heard that working with arrays as a value to a key in LocalStorage is a pain, and I did learn that pain. To use an array in such a matter requires you to stringify it, so each time you setItem you need to JSON.stringify(array). It's not that bad once you figure it out, but you also have to parse it every time you getItem. At this time I don't know a better way to do this.

#Lessonds Learned
As mentioned above in optimizations, I had to learn how to make arrays work as values to keys in LocalStorage and that was interesting, to say the least.
I also wanted to create two more buttons to display tasks, a 'move to top' and a 'move to the bottom', but couldn't quite think of a simple way to do it with how the app is currently laid out. 
When I made the latest localStorage changes I refactored building a task into one function and displaying the task into another as I wanted a way to display pre-existing items on load that wouldn't affect the buttons on the list items.
Now that I think about it, I could wipe the ol each time a task is 'move to top' or 'move to bottom' and reload the tasks. I might have to go back and do that another time.
