import React from "react";
import ReactMarkdown from "react-markdown";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, Terminal } from "lucide-react";
import { Link } from "react-router-dom";
import remarkGfm from 'remark-gfm';

const primerContent = `
## 🧠 What is Time Complexity?

Think of time complexity like asking:

> **"How many steps will my program take as the input gets bigger?"**

Imagine you're:

* 🧸 Putting LEGO blocks one by one (\`O(n)\`)
* 🎲 Checking only the first one (\`O(1)\`)
* 📚 Flipping every page of a big book to find a word (\`O(n)\`)
* 🕵️ Searching in a sorted drawer by cutting it in half every time (\`O(log n)\`)

---

## 🍭 Big O Notation – Like Candy Boxes!

Let’s say you have **n candies**:

### ✅ O(1) — **"I take 1 candy, no matter how many I have"**

\`\`\`python
def get_first(candies):
    return candies[0]
\`\`\`

> No matter if you have 10 or 10,000 candies — you **just grab the first one**. 🎯

---

### ✅ O(n) — **"I check every candy"**

\`\`\`python
def find_sour_candy(candies):
    for candy in candies:
        if candy == 'sour':
            return True
\`\`\`

> If there are 5 candies, you may look 5 times. If there are 100? You might look 100 times!

---

### ✅ O(n²) — **"I compare every candy with every other candy"**

\`\`\`python
def find_duplicates(candies):
    for i in candies:
        for j in candies:
            if i == j and i != j:
                return True
\`\`\`

> Imagine you’re checking every candy against every other candy — it gets **super slow** when the pile grows! 🍬🍬🍬

---

### ✅ O(log n) — **"I cut the candy box in half each time!"**

\`\`\`python
def binary_search(candies, target):
    left, right = 0, len(candies) - 1
    while left <= right:
        mid = (left + right) // 2
        if candies[mid] == target:
            return True
        elif candies[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
\`\`\`

> Smart search! Cut your pile in half every time until you find the candy 🍭

---

### ✅ O(n log n) — **"Sort candies smartly!"**

> Merge sort, quicksort — faster than checking every pair like O(n²), but slower than O(n)

---

## 🍕 Analogy Recap:

| Big O      | Like this...                                      |
| ---------- | ------------------------------------------------- |
| O(1)       | Grab the first candy 🍬                           |
| O(n)       | Taste every candy one by one 😋                   |
| O(n²)      | Compare every candy with every other candy 😵     |
| O(log n)   | Smart guess by cutting box in half each time 🔪   |
| O(n log n) | Smart sorting like organizing Lego blocks fast 🧱 |

---

## 🧩 Exercise 1: Candy Basket 🍬

You have a basket of \`n\` candies. You want to find if there's **any red candy**.

\`\`\`python
def has_red(candies):
    for candy in candies:
        if candy == "red":
            return True
\`\`\`

### ❓ What's the time complexity?

> ✅ **Answer: \`O(n)\`** — you may need to check all the candies!

---

## 🧩 Exercise 2: Toy Shelf 🧸

You have a list of 10 toys. You always play with the **first one**.

\`\`\`python
def play_with_toy(toys):
    return toys[0]
\`\`\`

### ❓ Time complexity?

> ✅ **Answer: \`O(1)\`** — always 1 step, no matter how many toys!

---

## 🧩 Exercise 3: Checking Every Friend's Name 👧👦

You want to say hi to every friend at the party.

\`\`\`python
def say_hi(friends):
    for friend in friends:
        print("Hi", friend)
\`\`\`

### ❓ Time complexity?

> ✅ **Answer: \`O(n)\`** — say "Hi" once per friend!

---

## 🧩 Exercise 4: Double Trouble 🎭

You want to check every pair of kids to see if they’re best friends.

\`\`\`python
def check_best_friends(kids):
    for kid1 in kids:
        for kid2 in kids:
            if kid1 != kid2:
                print(f"{kid1} and {kid2} might be besties!")
\`\`\`

### ❓ Time complexity?

> ✅ **Answer: \`O(n²)\`** — for each kid, check with every other kid.

---

## 🧩 Exercise 5: Magic Box 📦

You have a **sorted** list of stickers. You want to find "Unicorn" using binary search.

\`\`\`python
def find_unicorn(stickers):
    left, right = 0, len(stickers) - 1
    while left <= right:
        mid = (left + right) // 2
        if stickers[mid] == "Unicorn":
            return True
        elif stickers[mid] < "Unicorn":
            left = mid + 1
        else:
            right = mid - 1
\`\`\`

### ❓ Time complexity?

> ✅ **Answer: \`O(log n)\`** — cut the box in half each time!

---

## ✨ Challenge Yourself:

Try to guess the Big O for these:

1. Reversing a list of \`n\` items
2. Adding an item to a dictionary
3. Looping twice one after the other (not nested)
4. Creating all possible pairs in a list
5. Looping inside a loop inside a loop (3 levels!)

---

## Big-O Time Complexities Cheat Sheet

| **Category**            | **Operation / Pattern**                       | **Time Complexity**  |
|-------------------------|-----------------------------------------------|----------------------|
| **Arrays**              | Traversal, updates                            | O(n)                 |
|                         | Merge Sort                                    | O(n log n)           |
|                         | Quick Sort (average)                          | O(n log n)           |
|                         | Quick Sort (worst case)                       | O(n²)                |
|                         | Binary Search                                 | O(log n)             |
|                         | Two-pointer / Sliding Window                  | O(n)                 |
|                         | Prefix Sum construction                       | O(n)                 |
| **Strings**             | Reverse / Palindrome check                    | O(n)                 |
|                         | Hashmap-based Anagram check                   | O(n)                 |
|                         | Sorting-based Anagram check                   | O(n log n)           |
| **Linked List**         | Reverse (iterative / recursive)               | O(n)                 |
|                         | Detect Cycle (Floyd’s)                        | O(n)                 |
|                         | Merge Two Sorted Lists                        | O(n)                 |
|                         | Find Middle Node                              | O(n)                 |
| **Stack / Queue**       | Push / Pop / Enqueue / Dequeue                | O(1)                 |
|                         | Valid Parentheses                             | O(n)                 |
|                         | Next Greater Element (Monotonic Stack)        | O(n)                 |
| **Hashing**             | Insert / Search / Delete (average)            | O(1)                 |
|                         | Count Frequencies                             | O(n)                 |
|                         | Subarray with Sum / No Repeats                | O(n)                 |
| **Recursion / Backtracking** | Subsets / Permutations                | O(2^n * n)           |
| **Trees (Binary)**      | Traversals (Inorder / Pre / Post / Level)     | O(n)                 |
|                         | Height, LCA, Validate BST                     | O(n)                 |
| **Heaps**               | Insert / Delete (Min / Max heap)              | O(log n)             |
|                         | Build heap (heapify array)                    | O(n)                 |
| **Dynamic Programming** | 0/1 Knapsack                                  | O(n * W)             |
|                         | Fibonacci (memoized)                          | O(n)                 |
|                         | Longest Common Subsequence (LCS)              | O(n * m)             |
| **Graphs**              | DFS / BFS traversal                           | O(V + E)             |
|                         | Detect Cycle (undirected)                     | O(V + E)             |
|                         | Topological Sort                              | O(V + E)             |
`;

export default function TimeComplexityPrimer() {
    return (
        <div className="min-h-screen bg-white text-neutral-900 font-sans selection:bg-purple-100">
            <Navbar />

            <main className="relative px-6 sm:px-12 lg:px-20 py-24 pt-32 sm:pt-44 overflow-hidden">
                {/* Background Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:40px_40px] opacity-40 pointer-events-none fixed" />

                <div className="relative z-10 max-w-4xl mx-auto">
                    <Link to="/library/dsa-roadmap" className="inline-flex items-center gap-2 text-neutral-500 hover:text-black mb-10 hover:translate-x-[-4px] transition-transform">
                        <ArrowLeft className="w-4 h-4" />
                        <span>Back to Roadmap</span>
                    </Link>

                    <div className="mb-12 border-b border-neutral-200 pb-8">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="w-2 h-2 bg-purple-600 animate-pulse rounded-full" />
                            <span className="text-xs font-mono text-purple-600 tracking-widest uppercase">system.primer_module</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-extrabold text-neutral-900 tracking-tight leading-tight">
                            Time Complexity Primer
                        </h1>
                        <p className="text-xl text-neutral-500 mt-4 max-w-2xl">
                            Understanding Big-O notation simply, like candies and Lego blocks.
                        </p>
                    </div>

                    <article className="prose prose-neutral prose-lg max-w-none">
                        <ReactMarkdown
                            remarkPlugins={[remarkGfm]}
                            components={{
                                code({ node, inline, className, children, ...props }) {
                                    const match = /language-(\w+)/.exec(className || '')
                                    return !inline && match ? (
                                        <div className="relative group overflow-hidden my-8 border border-neutral-200 bg-neutral-900 shadow-xl rounded-none">
                                            <div className="flex items-center justify-between px-4 py-2 bg-neutral-800 border-b border-neutral-700">
                                                <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest">{match[1]}</span>
                                                <div className="flex gap-1.5">
                                                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/20"></div>
                                                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20"></div>
                                                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/20"></div>
                                                </div>
                                            </div>
                                            <pre className="p-5 overflow-x-auto text-sm leading-relaxed font-mono">
                                                <code className={`${className} text-neutral-300`} {...props}>
                                                    {children}
                                                </code>
                                            </pre>
                                        </div>
                                    ) : (
                                        <code className="bg-purple-50 px-1.5 py-0.5 text-sm font-mono text-purple-600 border border-purple-100 rounded-none" {...props}>
                                            {children}
                                        </code>
                                    )
                                },
                                h1: ({ children }) => <h2 className="text-3xl font-bold mt-12 mb-6 text-black flex items-center gap-3"><span className="w-1.5 h-8 bg-purple-600"></span>{children}</h2>,
                                h2: ({ children }) => <h3 className="text-2xl font-bold mt-12 mb-6 text-neutral-800 border-b border-neutral-100 pb-2">{children}</h3>,
                                h3: ({ children }) => <h4 className="text-xl font-bold mt-8 mb-4 text-neutral-900">{children}</h4>,
                                p: ({ children }) => <p className="text-neutral-600 leading-7 mb-6 text-lg">{children}</p>,
                                ul: ({ children }) => <ul className="list-disc list-outside space-y-2 mb-6 ml-4 text-neutral-600 marker:text-purple-400">{children}</ul>,
                                ol: ({ children }) => <ol className="list-decimal list-outside space-y-2 mb-6 ml-4 text-neutral-600 marker:text-purple-600 marker:font-bold">{children}</ol>,
                                li: ({ children }) => <li className="pl-1">{children}</li>,
                                blockquote: ({ children }) => <blockquote className="border-l-4 border-purple-500 pl-6 italic text-neutral-500 my-8 py-2 bg-neutral-50">{children}</blockquote>,
                                table: ({ children }) => <div className="overflow-x-auto my-8 border border-neutral-200 shadow-sm"><table className="min-w-full divide-y divide-neutral-200 text-sm bg-white">{children}</table></div>,
                                th: ({ children }) => <th className="px-5 py-4 bg-neutral-50 text-left font-semibold text-neutral-900 uppercase tracking-wider text-xs">{children}</th>,
                                td: ({ children }) => <td className="px-5 py-4 border-t border-neutral-100 text-neutral-600">{children}</td>,
                                a: ({ href, children }) => <a href={href} target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 hover:underline underline-offset-4 decoration-purple-300 font-medium transition-colors">{children}</a>,
                                hr: () => <hr className="border-neutral-200 my-12" />,
                                strong: ({ children }) => <strong className="font-bold text-neutral-900">{children}</strong>
                            }}
                        >
                            {primerContent}
                        </ReactMarkdown>
                    </article>

                    <div className="mt-16 pt-8 border-t border-neutral-200 flex items-center justify-between text-sm text-neutral-500">
                        <div className="font-mono">
                            MODULE_ID: TC_PRIMER_V1
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            STATUS: READABLE
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
