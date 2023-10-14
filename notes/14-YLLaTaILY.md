## You Look Like a Thing and I Love You - by Janelle Shane
> Recommendation: 9 / 10
    
### Description
A funny book explaining the basics of AI! The subtitle is How Artificial Intelligence Works and Why It's Making the World a Weirder Place. A great introduction to AI. With a cute cartoon mascot. The title is from her training an AI to write romantic greeting cards.
    
### Notes
My blog, AI Weirdness: https://www.aiweirdness.com/<br>
<br>
Pranking an AI - giving it a task and watching it flail - is a great way to learn about it.<br>
<br>
The inner workings of AI algorithms are often so strange and tangled that looking at an AI’s output can be one of the only tools we have for discovering what it understood and what it got terribly wrong.<br>
<br>
A machine learning algorithm figures out the rules for itself via trial and error, gauging its success on goals the programmer has specified.<br>
It can discover rules and correlations that the programmer didn’t even know existed.<br>
<br>
Many AIs learn by copying humans. The question they’re answering is not “What is the best solution?” but “What would the humans have done?”<br>
<br>
Worrying about an AI takeover is like worrying about overcrowding on Mars.<br>
<br>
AI models get reused a lot, a process called transfer learning.<br>
Using less data by starting with an AI that’s already partway to its goal.<br>
Start with an algorithm that’s already been trained to recognize general sorts of objects in generic images, then use that algorithm as a starting point for specialized object recognition.<br>
<br>
Adding hidden layers to our neural network gets us a more sophisticated algorithm. To combine the insights from the previous layer.<br>
This approach - lots of hidden layers for lots of complexity - is known as deep learning.<br>
<br>
Like a very specialized punisher cell, designed specifically to punish: called the activation function.<br>
<br>
The point of using machine learning is that we don’t have to set up the neural network by hand. Instead, it should be able to configure itself into something that does a great job.<br>
<br>
Class imbalance: only a handful of every thousand sandwiches from the sandwich hole are delicious.<br>
The neural net may realize it can achieve 99.9 percent accuracy by rating each sandwich as terrible, no matter what.<br>
To combat class imbalance, we’ll need to prefilter our training sandwiches so that there are approximately equal proportions of sandwiches that are delicious and awful.<br>
Class imbalance–related problems show up when we ask AI to detect a rare event.<br>
Medical imaging, where they may be looking for just one abnormal cell among hundreds.<br>
Solar-flare-detecting.<br>
<br>
Almost all the cells in a neural net are as mysterious as this one.<br>
<br>
To make a DeepDream image, you start with a neural network that has been trained to recognize something - dogs, for example.<br>
Then you choose one of its cells and gradually change the image to make that cell increasingly more excited about it.<br>
<br>
A Markov chain is an algorithm that can tackle many of the same problems as the recurrent neural network (RNN).<br>
You’ve probably interacted with directly if you’ve used the predictive-text feature of a smartphone.<br>
Markov chains are more lightweight than most neural networks and quicker to train. That’s why the predictive-text function of smartphones is usually a Markov chain rather than an RNN.<br>
However, a Markov chain gets exponentially more unwieldy as its memory increases.<br>
Most predictive-text Markov chains, for example, have memories that are only three to five words long.<br>
RNNs, by contrast, can have memories that are hundreds of words long.<br>
Because training a new Markov chain is relatively quick and easy, the text you get is specific to you.<br>
Your phone’s predictive text and autocorrect Markov chains update themselves as you type, training themselves on what you write.<br>
<br>
A random forest algorithm is a type of machine learning algorithm frequently used for prediction and classification.<br>
To understand the forest, let’s start with the trees.<br>
A random forest algorithm is made of individual units called decision trees.<br>
A decision tree is basically a flowchart that leads to an outcome based on the information we have.<br>
The decision tree can become so deep that it would only work for the specific situations from the training set. That is, it would overfit the training data.<br>
<br>
The random forest method of machine learning:<br>
In much the same way as a neural network uses trial and error to configure the connections between its cells, a random forest algorithm uses trial and error to configure itself.<br>
A random forest is made of a bunch of tiny (that is, shallow) trees that each consider a tiny bit of information to make a couple of small decisions.<br>
During the training process, each shallow tree learns which information to pay attention to and what the outcome should be.<br>
Each tiny tree’s decision probably won’t be very good, because it’s based on very limited information.<br>
But if all the tiny trees in the forest pool their decisions and vote on the final outcome, they will be much more accurate than any individual tree.<br>
(The same phenomenon holds true for human voters: if people try to guess how many marbles are in a jar, individually their guesses may be way off, but on average their guesses will likely be very close to the real answer.)<br>
<br>
The simplest methods of trial and error are those in which you always travel in the direction of improvement - often called hill climbing if you’re trying to maximize a number, or gradient descent if you’re trying to minimize a number.<br>
Your search space - somewhere in that space is your goal.<br>
<br>
In evolutionary algorithms, each potential solution is like an organism.<br>
In each generation, the most successful solutions survive to reproduce, mutating or mating with other solutions to produce different - and, one hopes, better - children.<br>
<br>
Image-generating, image-remixing, and image-filtering tools are usually the work of GANs (generative adversarial networks).<br>
They’re a subvariety of neural networks.<br>
GANs is they’re really two algorithms in one - two adversaries that learn by testing each other.<br>
One, the generator, tries to imitate the input dataset.<br>
The other, the discriminator, tries to tell the difference between the generator’s imitation and the real thing.<br>
GANs work by combining two algorithms - one that generates images and one that classifies images - to reach a goal.<br>
<br>
The narrower the task, the smarter the AI seems.<br>
<br>
I trained a neural net to generate new titles for BuzzFeed list articles:<br>
"17 Things You Aren’t Perfectly And Beautiful"<br>
<br>
Text-generating RNNs create non sequiturs because their world essentially is a non sequitur.<br>
<br>
AIs lack the contextual knowledge to understand when their solutions are not what humans would have preferred.<br>
<br>
It’s really tricky to come up with a goal that the AI isn’t going to accidentally misinterpret.<br>
<br>
Many kinds of crime and fraud could be thought of as reward function hacking.<br>
<br>
A way to get machine learning algorithms to solve problems without ever being told the goal at all.<br>
Rather, you give them a single, very broad goal: satisfy curiosity.<br>
A curiosity-driven AI makes observations about the world, then makes predictions about the future.<br>
If the thing that happens next is not what it predicted, it counts that as a reward.<br>
As it learns to predict better, it has to seek out new situations in which it doesn’t yet know how to predict the outcome.<br>
<br>
The noisy TV problem: the AI was chaos-seeking rather than truly curious.<br>
It would be just as mesmerized by random static as by movies.<br>
So one way of combating the noisy TV problem is to reward the AI not just for being surprised but also for actually learning something.<br>
<br>
If data comes from humans, it will likely have bias in it.<br>
Since humans tend to be biased, the algorithms that learn from them will also tend to be biased unless humans take extra care to find and remove the bias.<br>
<br>
If we try to teach a narrow AI a second task, it’ll forget the first one.<br>
This quirk of neural networks is known as catastrophic forgetting.<br>
<br>
Doom-playing AI that was really three AIs in one - one observing the world, one predicting what will happen next, and one deciding the best action to take.<br>
<br>
Algorithms tend to become more biased than their training data.<br>
From their perspective, they have only discovered a useful shortcut rule that helps them match the humans in their training data more often.<br>
<br>
Pictures showed a man cooking only 33 percent of the time.<br>
The AI labeled only 16 percent of the images as “man.”<br>
It had decided that it could increase its accuracy by assuming that any human in the kitchen was a woman.<br>
<br>
That tiny adversarial patch of static managed to convince the AI that a submarine was in fact a bonnet - and that a daisy, a brown bear, and a minivan were all tree frogs.<br>
<br>
Voice-to-text algorithms can also be hacked.<br>
Make an audio clip of a voice saying “Seal the doors before the cockroaches get in.”<br>
Overlay noise that a human will hear as subtle static but that will make a voice-recognition AI hear the clip as “Please enjoy a delicious sandwich.”<br>
It’s possible to hide messages in music or even in silence.<br>
<br>
Slipping the words ‘Oxford’ or ‘Cambridge’ into a CV in invisible white text, can pass the automated screening.<br>
<br>
If you chop an image of a flamingo into pieces and rearrange the pieces, a human will no longer be able to tell that it’s a flamingo. But an AI may still have no trouble seeing the bird.<br>
The AI is acting like a bag-of-features model.<br>
Only looking for the features, not how they’re connected.<br>
<br>
Machine learning needs humans for is maintenance.<br>
After an AI has been trained on real-world data, the world might change.<br>
The AI had been trained on cars from the 1980s and didn’t know how to recognize modern cars.<br>
<br>
If an algorithm sees that there are more arrests in a particular neighborhood than there are in others, it will predict that there will be more arrests there in the future, too.<br>
If the police respond to this prediction by sending more officers to the area, it may become a self-fulfilling prophecy: more police on the streets means that even if the actual crime rate is no higher than it is in other neighborhoods, the police will witness more crimes and make more arrests.<br>
Then the problem will only escalate.<br>
Even humans fall for this as well.<br>
<br>
Book on Amazon priced at $1,730,045.91 and $2,198,177.95.<br>
The next day, both books had increased in price, to nearly $2.8 million.<br>
The company that sold the less expensive book would increase its price so that it was exactly 0.9983 times the price of the more expensive book.<br>
The expensive book’s price would increase to become exactly 1.270589 times the price of the cheaper book.<br>
Both companies were apparently using algorithms to set their book prices.<br>
One company wanted to charge as much as it could while still having the cheapest book available.<br>
The company that sold the more expensive book had very good feedback scores and theorized that it was counting on this to induce some customers to pay a slightly higher price for the book - at which point it would order the book from the cheaper company and ship it to the customer, pocketing the profit.<br>
<br>
Musicians can employ music-generating algorithms, using them to put together a piece of original music to exactly fit a commercial slot for which the music doesn’t have to be exceptional, just inexpensive.<br>
<br>
The human role is to be an editor.
