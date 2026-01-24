// Resources data - cheat sheets, roadmaps, and learning materials

export const resources = [
    {
        id: "dsa-roadmap",
        title: "15-30 Days DSA Roadmap",
        subtitle: "Crack ₹10-15 LPA Offers",
        description: "A priority-based roadmap focusing on high-impact core DSA topics. Covers Tier 1-4 from fundamentals to advanced topics for dream companies.",
        link: "/resources/dsa-roadmap",
        tags: ["DSA", "Interview Prep", "Roadmap"],
        icon: "🚀",
        featured: true,
    },
    {
        id: "system-design",
        title: "System Design Primer",
        subtitle: "Coming Soon",
        description: "Learn to design scalable systems from scratch. Covers distributed systems, databases, caching, and real-world architectures.",
        link: null,
        tags: ["System Design", "Architecture", "Coming Soon"],
        icon: "🏗️",
        featured: false,
    },
];

// Full DSA Roadmap content
export const dsaRoadmap = {
    title: "🚀 15-30 Days DSA Roadmap to Crack ₹10–15 LPA Offers",
    subtitle: "Tips, Strategies, and Patterns to Solve and Identify DSA Problems",
    blogLink: "https://dev.to/ankushsinghgandhi/tips-strategies-and-patterns-to-solve-and-identify-dsa-problems-4jja",
    intro: "This roadmap helps you crack ₹10–15 LPA roles efficiently in 15-30 days by focusing on high-impact core DSA topics. For those aiming higher, Tier 4 covers advanced data structures for top-tier dream companies — which may take 3-4 months to master.",

    primer: {
        title: "🧠 Time Complexity Primer",
        description: "Before jumping into Tier 1, understand Big-O complexities. Know worst-case time complexity, choose optimal solutions, and understand space-time tradeoffs.",
        link: "https://dev.to/ankushsinghgandhi/time-complexity-primer-understand-big-o-like-a-kid-with-candies-2ih0",
    },

    tiers: [
        {
            name: "Tier 1: Must-Do",
            emoji: "🔥",
            weightage: "50-60%",
            description: "These are asked in almost every interview – master them first.",
            topics: [
                {
                    title: "Number-Based Problems & Basics",
                    percentage: "10%",
                    items: ["Palindrome, prime, factorial, Armstrong", "String manipulation & permutations", "Recursion basics (Fibonacci, pair sums)", "Lists, sets, dictionaries, sorting"],
                },
                {
                    title: "Arrays & Strings",
                    percentage: "15%",
                    items: ["Quick Sort, Merge Sort", "Sliding Window & Two-pointer", "Binary search variations", "Prefix/Suffix computations", "Frequency counting"],
                },
                {
                    title: "Linked Lists (Singly)",
                    percentage: "10%",
                    items: ["Traversal, insertion, deletion", "Reverse (iterative & recursive)", "Floyd's cycle detection", "Merge two sorted lists"],
                },
                {
                    title: "Stacks & Queues",
                    percentage: "10%",
                    items: ["Valid parentheses", "Next greater element", "Monotonic stack / Min stack", "Circular queue"],
                },
                {
                    title: "Hashing",
                    percentage: "10%",
                    items: ["Frequency counting", "Subarray with given sum", "Group anagrams", "Longest substring without repeats"],
                },
                {
                    title: "Recursion & Backtracking",
                    percentage: "5%",
                    items: ["Factorial, Fibonacci", "Subsets, combinations", "N-Queens, Permutations"],
                },
            ],
        },
        {
            name: "Tier 2: Medium Priority",
            emoji: "⚡",
            weightage: "20-25%",
            description: "Common but not always core. Do these next.",
            topics: [
                {
                    title: "Trees (Binary Trees & BST)",
                    percentage: "15%",
                    items: ["Inorder, Preorder, Postorder", "Level order (BFS)", "Height, LCA, Diameter", "Is it a BST?"],
                },
                {
                    title: "Heaps (Priority Queue)",
                    percentage: "5%",
                    items: ["K largest/smallest elements", "Sort nearly sorted array", "Min/Max Heap concepts"],
                },
                {
                    title: "Greedy Algorithms",
                    percentage: "5%",
                    items: ["Activity selection", "Kruskal's MST", "Fractional knapsack"],
                },
            ],
        },
        {
            name: "Tier 3: Optional",
            emoji: "🧊",
            weightage: "25-30%",
            description: "Only if you have time or the company asks for these.",
            topics: [
                {
                    title: "Graphs",
                    percentage: "5-8%",
                    items: ["BFS, DFS", "Cycle detection", "Dijkstra's basics", "Topological sort"],
                },
                {
                    title: "Dynamic Programming",
                    percentage: "15%",
                    items: ["Fibonacci with memoization", "0/1 Knapsack", "Longest Common Subsequence", "Tabulation vs Memoization"],
                },
                {
                    title: "Tries",
                    percentage: "2-3%",
                    items: ["Implement Trie", "Word dictionary problems", "Longest prefix matching"],
                },
            ],
        },
        {
            name: "Tier 4: Advanced",
            emoji: "🎯",
            weightage: "For Dream Companies",
            description: "Advanced concepts for top-tier companies. Takes 3-4 months.",
            topics: [
                {
                    title: "Advanced Trees",
                    percentage: "",
                    items: ["AVL Trees with rotations", "Segment Trees", "Fenwick Tree (BIT)"],
                },
                {
                    title: "Advanced Graphs",
                    percentage: "",
                    items: ["SCCs (Kosaraju/Tarjan)", "Bellman-Ford", "Network Flow"],
                },
                {
                    title: "String Algorithms",
                    percentage: "",
                    items: ["KMP, Rabin-Karp", "Z-algorithm", "Suffix Arrays"],
                },
                {
                    title: "Bit Manipulation",
                    percentage: "",
                    items: ["Common bit tricks", "XOR problems", "Bitmask DP"],
                },
            ],
        },
    ],

    practiceLinks: [
        { name: "GFG Top 50 String Questions", url: "https://www.geeksforgeeks.org/dsa/top-50-string-coding-problems-for-interviews/" },
        { name: "LeetCode 75", url: "https://leetcode.com/studyplan/leetcode-75/" },
        { name: "LeetCode 150", url: "https://leetcode.com/studyplan/top-interview-150/" },
    ],

    tips: [
        "Focus on patterns, not just isolated problems",
        "Practice LeetCode Easy/Medium per category",
        "Prioritize Tier 1 & 2 for ₹10-15 LPA roles",
        "Tier 3 & 4 for top companies",
        "You don't need to know everything — just the right things",
    ],
};
