# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

julius = User.create!(username: 'Julius', email: 'julius@caesarnote.com', password: 'password')

##### Notebooks #####
# Notebook.create(name: 'My First Notebook', user_id: demoUser.id, is_default: true)
Notebook.find_by_name('My First Notebook').destroy!

thinking = Notebook.create!(name: 'Thinking about thinking', user_id: julius.id, is_default: false, is_shortcut: false)
math = Notebook.create!(name: 'Math & CS', user_id: julius.id, is_default: false, is_shortcut: true)
misc = Notebook.create!(name: 'Miscellaneous', user_id: julius.id, is_default: true, is_shortcut: true)

##### Notes #####
farnam_street = Note.create!(
  title: "Mental Models",
  body: "<h1><strong>Mental Models: The Best Way to Make Intelligent Decisions (109 Models Explained)</strong></h1><p><img src=\"https://aub5dj147f97c3ax-zippykid.netdna-ssl.com/wp-content/uploads/2013/06/brain-white.jpg\" width=\"400\"></p><p>Mental models are how we understand the world. Not only do they shape what we think and how we understand but they shape the connections and opportunities that we see. Mental models are how we simplify complexity, why we consider some things more relevant than others, and how we reason.</p><p><br></p><p><span style=\"background-color: rgb(255, 255, 0);\">A mental model is simply a representation of how something works.</span> We cannot keep all of the details of the world in our brains, so we use models to simplify the complex into understandable and organizable chunks.</p><p><br></p><h2><strong>Thinking Better</strong></h2><p><br></p><p>The quality of our thinking is proportional to the models in our head and their usefulness in the situation at hand. The more models you have—the bigger your toolbox—the more likely you are to have the right models to see reality. It turns out that when it comes to improving your ability to make decisions</p><p>variety matters.</p><p><br></p><p>Most of us, however, are specialists. Instead of a latticework of mental models, we have a few from our discipline. Each specialist sees something different. By default, a typical Engineer will think in systems. A psychologist will think in terms of incentives. A biologist will think in terms of evolution. By putting these disciplines together in our head, we can walk around a problem in a three dimensional way. <span style=\"background-color: rgb(255, 255, 0);\">If we’re only looking at the problem one way, we’ve got a blind spot</span>. And blind spots can kill you.</p><p><br></p><p>Here’s another way to think about it. When a botanist looks at a forest they may focus on the ecosystem, an environmentalist sees the impact of climate change, a forestry engineer the state of the tree growth, a business person the value of the land. None are wrong, but neither are any of them able to describe the full scope of the forest. Sharing knowledge, or learning the basics of the other disciplines, would lead to a more well-rounded understanding that would allow for better initial decisions about managing the forest.</p><p><br></p><p>In a famous speech in the 1990s,&nbsp;<span style=\"background-color: transparent; color: rgb(204, 50, 50);\">Charlie Munger</span>&nbsp;summed up the approach to practical wisdom through understanding mental models by saying: “Well, the first rule is that you can’t really know anything if you just remember isolated facts and try and bang ’em back. If the facts don’t hang together on a latticework of theory, you don’t have them in a usable form. You’ve got to have models in your head. And you’ve got to array your experience both vicarious and direct on this latticework of models. You may have noticed students who just try to remember and pound back what is remembered. Well, they fail in school and in life. You’ve got to hang experience on a latticework of models in your head.”</p><p><img src=\"https://aub5dj147f97c3ax-zippykid.netdna-ssl.com/wp-content/uploads/2018/08/acquiring-wisdom-white.jpg\" alt=\"Mental Model Toolbox\" width=\"400\"></p><h2><strong>A Latticework of Mental Models</strong></h2><p><br></p><p>To help you build your latticework of mental models so you can&nbsp;make better decisions, we’ve collected and summarized the ones we’ve found the most useful.</p><p>And remember: Building your latticework is a lifelong project. Stick with it, and you’ll find that your ability to <span style=\"background-color: rgb(255, 255, 0);\">understand reality, make consistently good decisions, and help those you love</span> will always be improving.</p>",
  notebook_id: thinking.id,
  user_id: julius.id,
  is_shortcut: true,
  is_trashed: false,
  cipher_key: 0,
  is_ciphered: false
)

wait_but_why = Note.create!(
  title: "Wait But Why",
  body:"<h1><strong>10 Types of Odd Friendships You’re Probably Part Of</strong></h1><p><span style=\"background-color: initial;\">December 8, 2014\t</span>By Tim Urban</p><p><br></p><p><em style=\"background-color: initial;\">A note about listicles: So we know a lot of people hate listicles and associate them with cheap, low-quality, traffic-driving, link-bait articles. But here’s the thing—a list is a great format for an article, and a format I was using on my old blog almost 10 years ago.</em></p><p class=\"ql-align-center\">__________</p><p class=\"ql-align-center\"><br></p><p>When you’re a kid, or in high school, or in college, you don’t really work too hard on your friend situation. <strong><em>Friends just kind of happen.</em></strong></p><p><br></p><p>For a bunch of years, you’re in a certain life your parents chose for you, and so are other people, and none of you have that much on your plates, so friendships inevitably form. Then in college, you’re in the perfect friend-making environment, one that hits all <span style=\"color: rgb(0, 138, 0);\">three ingredients&nbsp;sociologists consider necessary&nbsp;for close friendships to develop: “proximity; repeated, unplanned interactions; and a setting that encourages people to let their guard down and confide in each other.”</span></p><p><br></p><p>More friendships happen.</p><p><br></p><p>Maybe they’re the right friends, maybe they’re not really, but you don’t put that much thought into any of it—you’re more of a passive observer.</p><p><br></p><p>Once student life ends, the people in your life start to shake themselves into more distinct tiers. Something like this:</p><p><br></p><p><a href=\"https://28oa9i1t08037ue3m1l0i861-wpengine.netdna-ssl.com/wp-content/uploads/2014/12/Mountain1.jpg\" target=\"_blank\" style=\"color: rgb(77, 150, 198); background-color: initial;\"><img src=\"https://28oa9i1t08037ue3m1l0i861-wpengine.netdna-ssl.com/wp-content/uploads/2014/12/Mountain1.jpg\" alt=\"Mountain\" height=\"575\" width=\"750\"></a></p><p><br></p><p>At the top of your life mountain, in the green zone, you have your&nbsp;<strong style=\"background-color: initial;\">Tier 1 friends</strong>—those who feel like brothers and sisters. These are the people closest to you, those you call first when something important happens, those you love even when they suck, who make speeches at your wedding, whose best and worst sides you know through and through, and whose relationship with you is eternal—even if you go months or years without hanging out, nothing has changed when you find yourself together again. Unfortunately, depending on how things went down in your youth, <span style=\"color: rgb(153, 51, 255);\">Tier 1 can also contain your worst enemies,</span> the people who can ruin your day with one subtle jab that only&nbsp;<em style=\"background-color: initial;\">they</em>&nbsp;could word so brilliantly hurtfully, the people you feel a burning resentment for, or jealousy of, or competition with. Tier 1 is high stakes.</p><p><br></p><p>Below, in the yellow zone, are your&nbsp;<strong style=\"background-color: initial;\">Tier 2 friends</strong>—your Pretty Good friends. Pretty Good friends are a much calmer situation than your brothers and sisters on Tier 1. You might be invited to their wedding, but you won’t have any responsibilities once you’re there. If you live in the same city, you might see them every month or two for dinner and have a great time when you do, but if one of you moves, you might not speak for the next year or two. And if something huge happens in their life, there’s a good chance you’ll hear it first from someone else.</p><p><br></p><p>Towards the bottom of the mountain in the orange zone, you have your&nbsp;<strong style=\"background-color: initial;\">Tier 3 friends</strong>—your Not Really friends. You might grab a one-on-one drink with one of them when you move to their city, but then it surprises neither of you when five years pass and drink #2 is still yet to happen. Your relationship tends to exist mostly as part of a bigger group or through the occasional Facebook like, and it doesn’t even really stress you out when you hear that one of them made $5 million last year. You may also try to sleep with one of these people at any given time.</p><p><br></p><p>The lowest part of Tier 3 begins to blend indistinguishably into your large group of&nbsp;<strong style=\"background-color: initial;\">acquaintances</strong>&nbsp;(the pink zone)—those people you’d stop and talk to if you saw them on the street or would maybe email for professional purposes, but whom you’d never hang out with one-on-one. <span style=\"color: rgb(230, 0, 0);\">When you hear that something bad happens to one of these people, you pretend to be sad but you don’t actually care.</span></p><p>Finally, acquaintances gradually blend into the endless world of strangers.</p><p>And depending on who you are and how things shook out in those first 25 years, the way your particular mountain looks will vary.</p>",
  notebook_id: misc.id,
  user_id: julius.id,
  is_shortcut: false,
  is_trashed: false,
  cipher_key: 0,
  is_ciphered: false
)

keyboard_cat = Note.create!(
  title: "Keyboard Cat",
  body: "<p><span class=\"ql-size-large\">The classic!</span></p><iframe class=\"ql-video\" frameborder=\"0\" allowfullscreen=\"true\" src=\"https://www.youtube.com/embed/J---aiyznGQ?showinfo=0\"></iframe><p><br></p><p><br></p><p><strong class=\"ql-size-large\">Next Steps:</strong></p><ol><li><span style=\"color: rgb(68, 68, 68);\">Buy cat</span></li><li><span style=\"color: rgb(68, 68, 68);\">Buy keyboard (maybe switch with Step 1?)</span></li><li><span style=\"color: rgb(68, 68, 68);\">Teach cat to play keyboard</span></li><li><span style=\"color: rgb(68, 68, 68);\">???</span></li><li><span style=\"color: rgb(68, 68, 68);\">Profit!</span></li></ol>",
  notebook_id: misc.id,
  user_id: julius.id,
  is_shortcut: true,
  is_trashed: false,
  cipher_key: 0,
  is_ciphered: false
)

paul_graham = Note.create!(
  title: "Paul Graham on Writing",
  body: "<p><br></p><p><img src=\"http://ep.yimg.com/ay/paulgraham/write-like-you-talk-1.gif\" alt=\"Write Like You Talk\" height=\"18\" width=\"157\"></p><p><br></p><p>October 2015</p><p><br></p><p>Here's a simple trick for getting more people to read what you write: <strong style=\"background-color: rgb(102, 185, 102);\"><em>write in spoken language</em></strong><strong><em>.</em></strong></p><p><br></p><p><strong>Something comes over most people when they start writing</strong>. They write in a different language than they'd use if they were talking to a friend. The sentence structure and even the words are different. No one uses \"pen\" as a verb in spoken English. You'd feel like an idiot using \"pen\" instead of \"write\" in a conversation with a friend.</p><p><br></p><p>The last straw for me was a sentence I read a couple days ago:</p><p><br></p><blockquote><s>The mercurial Spaniard</s> himself declared: \"After Altamira, all is decadence.\"</blockquote><p><br></p><p>It's from Neil Oliver's&nbsp;<em>A History of Ancient Britain</em>. I feel bad making an example of this book, because it's no worse than lots of others. But just imagine calling Picasso \"the mercurial Spaniard\" when talking to a friend. <strong>Even one sentence of this would raise eyebrows in conversation</strong>. And yet people write whole books of it.</p><p><br></p><p>Ok, so written and spoken language are different. Does that make written language worse?</p><p><br></p><p>If you want people to read and understand what you write, yes. Written language is more complex, which makes it more work to read. It's also more formal and distant, which gives the reader's attention permission to drift. But perhaps worst of all, the complex sentences and fancy words give you, the writer, the false impression that you're saying more than you actually are.</p><p><br></p><p>You don't need complex sentences to express complex ideas. When specialists in some abstruse topic talk to one another about ideas in their field, they don't use sentences any more complex than they do when talking about what to have for lunch. They use different words, certainly. But even those they use no more than necessary. And in my experience, the harder the subject, the more informally experts speak. Partly, I think, because they have less to prove, and partly because the harder the ideas you're talking about, the less you can afford to let language get in the way.</p>",
  notebook_id: thinking.id,
  user_id: julius.id,
  is_shortcut: false,
  is_trashed: false,
  cipher_key: 0,
  is_ciphered: false
)

basecamp = Note.create!(
  title: "Basecamp Team Structure",
  body: "<h1><strong>How we structure our work and teams at Basecamp</strong></h1><h2>An inside look at the specifics of how we decide what to do and then decide how to do&nbsp;it.</h2><p><br></p><p><a href=\"https://m.signalvnoise.com/@jasonfried?source=post_header_lockup\" target=\"_blank\" style=\"background-color: transparent; color: inherit;\"><img src=\"https://cdn-images-1.medium.com/fit/c/50/50/0*iogT6QBu33BhVdzo.png\" alt=\"Go to the profile of Jason Fried\"></a></p><p><a href=\"https://m.signalvnoise.com/@jasonfried?source=post_header_lockup\" target=\"_blank\" style=\"background-color: transparent; color: rgba(0, 0, 0, 0.84);\">Jason Fried</a>Nov 17, 2016</p><p><br></p><p>“How do you guys&nbsp;<em>actually</em>&nbsp;work? How do you choose what to do? How big are your teams? How do you structure the work itself” are questions I get all the time. I’ve been sharing the details in small group workshops and 1 on 1, but figured it was time to write something up so we can share it at large.</p><p><br></p><p>We landed on this process after a decade of refinement. Just like we’re always iterating on our product work, we’re also always iterating on how our company works. We consider our company a product too. When you begin to think of your company like a product, you can begin to improve it in entirely new ways. I feel like we’re on version 5.2 of “how we work”.</p><p><br></p><p>Let’s get into it:</p><p><br></p><h4><strong class=\"ql-size-large\">We work in six week&nbsp;cycles</strong></h4><p><br></p><p>Roughly every six weeks we start a new cycle of product work. Each six week work cycle contains two type of projects:</p><p><br></p><ul><li><strong>Big Batch</strong>: Big Batch projects are big features or stuff that’s probably going to take up the full six weeks to get done. We typically take on one or two Big Batch projects in a six week cycle.</li><li><strong>Small Batch:</strong>&nbsp;Small Batch projects are smaller things, tweaks, minor adjustments, and easy adds that should take anywhere from a day to two weeks to complete. We typically take on between 4 and 8 Small Batch projects in a six week cycle.</li></ul><p><br></p><p>To give you a sense of what kind of projects might fit into Big and Small,&nbsp;<a href=\"https://public.3.basecamp.com/p/yCe87HJ5EX1Nx48N3R6fhfHX\" target=\"_blank\" style=\"color: inherit; background-color: transparent;\">here’s an actual internal post announcing a cycle’s worth of work</a>.</p>",
  notebook_id: misc.id,
  user_id: julius.id,
  is_shortcut: false,
  is_trashed: false,
  cipher_key: 0,
  is_ciphered: false
)

eightyhours = Note.create!(
  title: "80000 Hours SWE Profile",
  body: "<h1><strong>New in-depth profile on software engineering</strong></h1><p><br></p><p><span style=\"background-color: transparent;\">By </span><u style=\"background-color: transparent; color: rgb(221, 221, 221);\">Roman Duda </u></p><p>Published June 11th, 2015</p><p><br></p><p><strong style=\"color: rgb(0, 102, 204);\">Our recommendation in the profile:</strong></p><blockquote>Software engineering at large tech-firms is a highly promising option that’s especially easy to test out. If you have good analytical skills (even if you are from a humanities background), you should strongly considering testing it.</blockquote><p><br></p><p><strong>Pros</strong>:</p><blockquote>You gain a great set of skills that are in short supply, which gives you <span style=\"color: rgb(0, 102, 204);\">great bargaining power and opens up a wide range of options,</span> including founding or joining early-stage startups, continuing in large tech-firms, data science, quantitative finance, research and remote freelance work.</blockquote><p><br></p><blockquote>Excellent working conditions, with flexible hours that are shorter than in many corporate jobs and ability to work remotely.</blockquote><p><br></p><blockquote>In the US, the pay is relatively high, especially early on in your career (many can start on $100,000), making it a <span style=\"color: rgb(0, 102, 204);\">good option for earning to give</span>.</blockquote><p><br></p><p><strong>Cons:</strong></p><blockquote>Mid and late stage earnings lower than in many other professional jobs.</blockquote><p><br></p><blockquote>Less opportunity to develop non-technical soft skills.</blockquote><p><br></p><p><strong>Topics explored in the full report include:</strong></p><ul><li>How to test out your fit for software engineering.</li><li>Using software engineering to pursue high-impact projects on the side.</li><li>A comparison of US and UK earnings – we found that average salaries are 40% higher in the US than in the UK, 80% higher in Silicon Valley than in London, and starting salaries for bootcamp graduates are around twice as high in Silicon Valley as in London.</li><li>What software engineering is like day to day and the key stages of progression.</li></ul>",
  notebook_id: misc.id,
  user_id: julius.id,
  is_shortcut: false,
  is_trashed: false,
  cipher_key: 0,
  is_ciphered: false
)

naval = Note.create!(
  title: "Naval Ravikant on Team Building",
  body: "<h1><strong>Build a Team that Ships</strong></h1><p><br></p><p>I started my first company 15 years go, and I still can’t manage. I suspect that very few people can. With AngelList, we want a team of self-managing people who ship code.</p><p><br></p><p><em>Here’s what we do:</em></p><ul><li><span style=\"background-color: rgb(204, 232, 204);\">Keep the team small.</span> All doers, no talkers. Absolutely no middle managers. All BD via APIs.</li><li>Outsource everything that isn’t core. Resist the urge to pick up that last dollar. Founders do Customer Service.</li><li>People choose what to work on. <span style=\"background-color: rgb(204, 232, 204);\">Better they ship what they want than not ship what you want.</span></li><li>No tasks longer than one week. You have to ship something into live production every week – worst case, two weeks. If you just joined, ship something.</li><li>Peer-management. Promise what you’ll do in the coming week on internal Yammer. Deliver – or publicly break your promise – next week.</li><li><span style=\"background-color: rgb(204, 232, 204);\">One person per project.</span> Get help from others, but you and you alone are accountable.</li></ul><p><br></p><p>If they can’t ship, release them. Our environment is wrong for them. They should go find someplace where they can thrive. There’s someplace for everyone.</p><p><br></p><p>It’s not perfect. We ship too many features, many half-baked. The product is complex, with many blind alleys. It’s hard to integrate non-engineers – they aren’t valued.</p><p><br></p><p><strong>But, we ship.</strong></p>",
  notebook_id: misc.id,
  user_id: julius.id,
  is_shortcut: false,
  is_trashed: false,
  cipher_key: 0,
  is_ciphered: false
)

sf_skyline = Note.create!(
  title: "SF Skyline",
  body: "<p><img src=\"https://amp.businessinsider.com/images/58f4e5ebf40daef5008b4bb4-750-500.jpg\" /></p>",
  notebook_id: misc.id,
  user_id: julius.id,
  is_shortcut: false,
  is_trashed: false,
  cipher_key: 0,
  is_ciphered: false
)

big_o = Note.create!(
  title: "Big O Cheat Sheet",
  body: "<p><img src=\"https://static1.squarespace.com/static/52b30f7ae4b067ba989438d4/t/5a7bb145ec212df82e61b3bf/1518055786273/Complexity+Cheatsheet.jpg\" /></p>",
  notebook_id: math.id,
  user_id: julius.id,
  is_shortcut: true,
  is_trashed: false,
  cipher_key: 0,
  is_ciphered: false
)

intro_to_ml = Note.create!(
  title: "Intro to Machine Learning",
  body: "<h1>Introduction To Machine Learning</h1><p><br></p><p><strong>Machine Learning</strong> is an idea to learn from examples and experience, without being explicitly programmed. Instead of writing code, you feed data to the generic algorithm, and it builds logic based on the data given.</p><p><br></p><p><img src=\"https://cdn-images-1.medium.com/max/2000/1*fp5BDiMUPn56qhIuCEO4QA.jpeg\"></p><p><br></p><p>For example, one kind of algorithm is a classification algorithm. It can put data into different groups. The classification algorithm used to detect handwritten alphabets could also be used to classify emails into spam and not-spam.</p><p><br></p><blockquote><em style=\"background-color: transparent;\">“A computer program is said to learn from experience E with some class of tasks T and performance measure P if its performance at tasks in T, as measured by P, improves with experience E.” -Tom M. Mitchell</em></blockquote><p><br></p><p><strong>Consider playing checkers.</strong></p><ul><li>E = the experience of playing many games of checkers</li><li>T = the task of playing checkers.</li><li>P = the probability that the program will win the next game.</li></ul><p><br></p><p><strong>Examples of Machine Learning</strong></p><p>There are many examples of machine learning. Here are a few examples of classification problems where the goal is to categorize objects into a fixed set of categories.</p><p><br></p><ul><li><strong>Face detection</strong>: Identify faces in images (or indicate if a face is present).</li><li><strong>Email filtering</strong>: Classify emails into spam and not-spam.</li><li><strong>Medical diagnosis</strong>: Diagnose a patient as a sufferer or non-sufferer of some disease.</li><li><strong>Weather prediction</strong>: Predict, for instance, whether or not it will rain tomorrow.</li></ul>",
  notebook_id: math.id,
  user_id: julius.id,
  is_shortcut: false,
  is_trashed: false,
  cipher_key: 0,
  is_ciphered: false
)

binary_tree = Note.create!(
  title: "Binary Tree Height",
  body: "<h1>How to calculate a Binary Tree’s height using array iteration in Ruby</h1><p><br></p><p>Data structures and algorithms are the heart and soul of computer science and software. One cannot learn programming without understanding how data is organized in code and how to manipulate it.</p><p><br></p><p>One such data structure is a binary tree:</p><p><br></p><p><img src=\"https://cdn-images-1.medium.com/max/1600/1*tsVyCA_zXrAh3LqTF4LHxw.png\"></p><p><br></p><p>In simple terms, a tree is network of ‘nodes’. A node is an object whose properties include the data itself and pointers to its ‘children’. For a binary tree, the maximum number of children each node can have is 2. A binary tree will have a root node and at most two children. Each child is just a pointer to another tree object or it can be nil. Using a hash, this can be visualized as:</p><p><br></p><pre class=\"ql-syntax\" spellcheck=\"false\">tree = {\n :data        =&gt; 1,\n :left_child  =&gt; [another_tree] || nil,\n :right_child =&gt; [another_tree_again] || nil\n}\n</pre><p><br></p><p>Before we go into height computations let us first find some uses for binary trees.</p><p>If you observe the directories or file structure in your computer, it follows a (albeit the more general) tree structure. Each folder can contain files (the data) and a number of other directories (which are not necessarily data in themselves but rather just addresses of such data contained within those sub directories). There are other use cases for binary trees that discussed better by other articles:</p>",
  notebook_id: math.id,
  user_id: julius.id,
  is_shortcut: false,
  is_trashed: false,
  cipher_key: 0,
  is_ciphered: false
)

linear_odes = Note.create!(
  title: "Linear ODEs Review",
  body: "<p>A first‐order differential equation is said to be<strong>linear</strong>if it can be expressed in the form:</p><p><br></p><p>&nbsp;&nbsp;<img src=\"https://www.cliffsnotes.com/assets/19076.jpg\">&nbsp;</p><p><br></p><p>where&nbsp;<em>P</em>&nbsp;and&nbsp;<em>Q</em>&nbsp;are functions of&nbsp;<em>x</em>. The method for solving such equations is similar to the one used to solve nonexact equations. There, the nonexact equation was multiplied by an integrating factor, which then made it easy to solve (because the equation became exact). To solve a first‐order linear equation, first rewrite it (if necessary) in the standard form above; then multiply both sides by the&nbsp;<strong>integrating factor</strong></p><p><br></p><p><img src=\"https://www.cliffsnotes.com/assets/19077.jpg\"></p><p><br></p><p>The resulting equation,&nbsp;</p><p><br></p><p><img src=\"https://www.cliffsnotes.com/assets/19078.jpg\">&nbsp;</p><p><br></p><p>is then easy to solve, not because it's exact, but because the left‐hand side collapses:</p><p><br></p><p><img src=\"https://www.cliffsnotes.com/assets/19079.jpg\"></p><p><br></p><p><br></p><p>Therefore, equation (*) becomes</p><p><br></p><p>&nbsp;&nbsp;<img src=\"https://www.cliffsnotes.com/assets/19080.jpg\">&nbsp;</p>",
  notebook_id: math.id,
  user_id: julius.id,
  is_shortcut: false,
  is_trashed: false,
  cipher_key: 0,
  is_ciphered: false
)

algorithms_strategies = Note.create!(
  title: "Algorithms Strategies",
  body: "<h4><span class=\"ql-size-large\">Data Structures</span></h4><p>Learn about arrays, linked lists, binary trees, hash tables, graphs, stacks, queues, heaps, and other fundamental data structures.</p><p><br></p><h4><span class=\"ql-size-large\">Math &amp;&nbsp;Logic</span></h4><p>You’ll need to know some mathematical concepts from several different areas if you want to excel at algorithms.&nbsp;<span style=\"background-color: transparent;\">Learn about set theory, finite-state machines, regular expressions, matrix multiplication, bitwise operations, solving linear equations, important combinatorics concepts such as permutations, combinations, pigeonhole principle.</span></p><p><br></p><h4><span class=\"ql-size-large\">Computer Architecture</span></h4><p>Learn how data is represented in a computer, the basics of digital logic design, boolean algebra, computer arithmetic, floating-point representation, cache design.&nbsp;<em>Try and learn a little about C and Assembly programming.</em></p><p><br></p><h3><span class=\"ql-size-large\">Moving Forward Past the Fundamentals</span></h3><p>Once you feel like you have a good understanding of&nbsp;<em>most</em>&nbsp;of the concepts listed above, it’s time to start diving into the algorithms part. First, prove that P != NP.</p><p><br></p>",
  notebook_id: math.id,
  user_id: julius.id,
  is_shortcut: false,
  is_trashed: false,
  cipher_key: 0,
  is_ciphered: false
)

bobby_tables = Note.create!(
  title: "Little Bobby Tables",
  body: "<p class=\"ql-align-center\"><img src=\"https://imgs.xkcd.com/comics/exploits_of_a_mom.png\" alt=\"Exploits of a Mom\"></p><p><br></p>",
  notebook_id: math.id,
  user_id: julius.id,
  is_shortcut: false,
  is_trashed: false,
  cipher_key: 0,
  is_ciphered: false
)

ggg = Note.create!(
  title: "Guns, Germs & Steel Synopsis",
  body: "<h2><span style=\"color: rgb(161, 0, 0);\">At a Glance</span></h2><p><br></p><p>In<em> Guns, Germs, and Steel, </em>anthropologist Jared Diamond explains why some societies are more materially successful than others. He attributes societal success to geography, immunity to germs,&nbsp;food production, the domestication of animals, and use of steel.</p><p><br></p><p><em>Guns, Germs, and Steel</em>&nbsp;summary key points:</p><ul><li>Farming and domesticating animals provide social stability that is lacking in hunter-gatherer societies. Labor specialization enables certain groups to develop weapons.</li><li>Major portions of Eurasia had a natural advantage in developing agriculture and domesticating animals because of geography and the presence of plants and animals that could be easily domesticated.</li><li>The landmass of Eurasia, laid out on an east-west axis, allowed for the sharing of crops, animals, and ideas. The Americas, stretched out on a north-south axis, traverse various climate zones and geographic boundaries that discourage trade.</li><li>The diversity and density of Eurasian populations created an immunity to germs that would later wipe out the more isolated populations of the Americas.</li></ul>",
  notebook_id: misc.id,
  user_id: julius.id,
  is_shortcut: false,
  is_trashed: false,
  cipher_key: 0,
  is_ciphered: false
)

adam_grant = Note.create!(
  title: "Adam Grant Interview Transcript",
  body: "<p><strong>GQ: I imagine this is going to be a bit like picking a favorite child, but of all the work you've done in organizational psychology, is there one particular insight or takeaway that sticks with you above everything else?</strong></p><p><br></p><p><em>Adam Grant</em>: That&nbsp;<em>is</em>&nbsp;like picking a favorite child. What separates the good from the great is the willingness to try new things. So often successful people and successful groups get stuck in a rut because they basically follow the same routines that have made them successful. If you're a sports team, that just makes you more predictable. If you're a company, it means you choose to stand still and make it easy either to miss major waves of change, or for other companies to disrupt you. And as an individual, it means you don't grow.</p><p>So I would love to see every individual, every group try at least one experiment every week. Whether that's shifting the structure of your meetings, or rotating around the leader for that decision—you can make a long list of what kind of experiments might be relevant. But to me, that's kind of the big lesson of organizational psychology: the people who are willing to try new things beat the ones who don't.</p><p><br></p><p><strong>What are some ways you would recommend to keep yourself in that spot of discomfort or uncertainty? Because, evolutionarily, I feel like we're wired to want to go to the thing that makes us comfortable.</strong></p><p><br></p><p>Totally. That was kind of my motivation for launching WorkLife. I felt like I had landed in a comfort zone where I'd been studying some of the same topics for years and I had a lot to say about them. It would have been very easy to stay in that wheelhouse and keep doing it, and I started to feel like I needed to go back out into the world and learn again, instead of teaching things I already knew.</p><p><br></p><p>Not everyone is going to go and start a podcast. But the generalizable takeaway from that is: we don't spend enough time learning about worlds that are different from our own. Even if it's just once a week, go out to lunch with somebody who's in a different industry and you ask them about how they operate, what they do, where they get their ideas, get to live a little bit vicariously from the way they work. That can be a great source of insight. In fact, there are a growing number of companies that give employees Lunch and Learn budgets. Where if you go to lunch with somebody outside of your organization and you go to learn and share some things that you've been working on, the company will pick up the tab. I would love to see more companies doing that.</p>",
  notebook_id: misc.id,
  user_id: julius.id,
  is_shortcut: false,
  is_trashed: false,
  cipher_key: 0,
  is_ciphered: false
)


##### Tags #####

blogs = Tag.create!(name: 'Blogs')

NoteTag.create!(note_id: farnam_street.id, tag_id: blogs.id)
NoteTag.create!(note_id: wait_but_why.id, tag_id: blogs.id)
NoteTag.create!(note_id: paul_graham.id, tag_id: blogs.id)
NoteTag.create!(note_id: basecamp.id, tag_id: blogs.id)
NoteTag.create!(note_id: naval.id, tag_id: blogs.id)

mental_models = Tag.create!(name: 'Mental Models')

NoteTag.create!(note_id: farnam_street.id, tag_id: mental_models.id)
NoteTag.create(note_id: naval.id, tag_id: mental_models.id)
NoteTag.create(note_id: ggg.id, tag_id: mental_models.id)

psychology = Tag.create!(name: 'Psychology')

NoteTag.create!(note_id: farnam_street.id, tag_id: pyschology.id)
NoteTag.create!(note_id: basecamp.id, tag_id: psychology.id)
NoteTag.create(note_id: naval.id, tag_id: psychology.id)


business = Tag.create!(name: 'Business')

NoteTag.create!(note_id: keyboard_cat.id, tag_ig: business.id)
NoteTag.create!(note_id: basecamp.id, tag_id: business.id)
NoteTag.create!(note_id: naval.id, tag_id: business.id)

important = Tag.create!(name: 'IMPORTANT')

NoteTag.create!(note_id: keyboard_cat.id, tag_id: important.id)


writing = Tag.create!(name: 'Writing') 

NoteTag.create!(note_id: paul_graham.id, tag_id: writing.id)
NoteTag.create!(note_id: ggg.id, tag_id: writing.id)

philosophy = Tag.create!(name: 'Philosophy')

NoteTag.create!(note_id: paul_graham.id, tag_id: philosophy.id)

career = Tag.create!(name: 'Career')

NoteTag.create!(note_id: eightyhours.id, tag_id: career.id)
NoteTag.create!(note_id: algorithms_strategies.id, tag_id: career.id)


algorithms = Tag.create!(name: 'Algorithms')

NoteTag.create!(note_id: binary_tree.id, tag_id: algorithms.id)
NoteTag.create!(note_id: algorithms_strategies.id, tag_id: algorithms.id)

math = Tag.create!(name: 'math')

NoteTag.create!(note_id: intro_to_ml.id, tag_id: math.id)
NoteTag.create!(note_id: linear_odes.id, tag_id: math.id)

compsci = Tag.create!(name: 'CompSci')

NoteTag.create!(note_id: eightyhours.id, tag_id: compsci.id)
NoteTag.create!(note_id: binary_tree.id, tag_id: compsci.id)
NoteTag.create!(note_id: bobby_tables.id, tag_id: compsci.id)

