const dotenv = require('dotenv');
const connectDB = require('./config/db');
const Project = require('./models/Project');
const Skill = require('./models/Skill');
const Book = require('./models/Book');
const Playlist = require('./models/Playlist');

dotenv.config();

connectDB();

const importData = async () => {
    try {
        await Project.deleteMany();
        await Skill.deleteMany();
        await Book.deleteMany();
        await Playlist.deleteMany();

        // Updated with your actual projects from your resume
        const projects = [
            {
                title: 'Streamify',
                description: 'Full-stack video communication platform supporting secure group and one-on-one calls with real-time chat[cite: 32].',
                techStack: ['MERN', 'WebRTC', 'Socket.IO', 'Zustand'],
                imageUrl: 'https://via.placeholder.com/150',
                githubLink: 'https://github.com/vankunavath0', // [cite: 6]
                featured: true,
            },
            {
                title: 'ResumeCraft',
                description: 'AI-powered resume generator leveraging the Gemini API for real-time, personalized content creation[cite: 37].',
                techStack: ['Node.js', 'MongoDB', 'Gemini API', 'Tailwind CSS'],
                imageUrl: 'https://via.placeholder.com/150',
                githubLink: 'https://github.com/vankunavath0', // [cite: 6]
                featured: true,
            },
            {
                title: 'Drift Box',
                description: 'Secure file storage system with encrypted uploads and token-based access control[cite: 42].',
                techStack: ['Node.js', 'Express.js', 'MongoDB', 'Multer'],
                imageUrl: 'https://via.placeholder.com/150',
                githubLink: 'https://github.com/vankunavath0', // [cite: 6]
                featured: false,
            },
        ];

        // Updated with your actual skills [cite: 18, 20, 22]
        const skills = [
            { category: 'Languages', name: 'JavaScript (ES6+)', iconUrl: 'js-icon.png' }, // [cite: 18]
            { category: 'Languages', name: 'C++', iconUrl: 'cpp-icon.png' }, // [cite: 18]
            { category: 'Frameworks', name: 'React.js', iconUrl: 'react-icon.png' }, // [cite: 20]
            { category: 'Frameworks', name: 'Node.js', iconUrl: 'node-icon.png' }, // [cite: 20]
            { category: 'Tools', name: 'GitHub', iconUrl: 'github-icon.png' }, // [cite: 19]
            { category: 'Cloud', name: 'Oracle Cloud (OCI)', iconUrl: 'oci-icon.png' }, // [cite: 46]
        ];

        const books = [
            {
                title: 'Atomic Habits', // Example fitting your "Self-help" interest
                author: 'James Clear',
                genre: 'Self-help',
                coverImage: 'https://via.placeholder.com/150',
                review: 'Essential for building consistent systems.',
            },
        ];

        const playlists = [
            {
                title: 'Deep Focus',
                spotifyEmbedUrl: 'https://open.spotify.com/embed/playlist/your-id',
                mood: 'Productive',
            },
        ];

        await Project.insertMany(projects);
        await Skill.insertMany(skills);
        await Book.insertMany(books);
        await Playlist.insertMany(playlists);

        console.log('Data Imported Successfully!');
        process.exit();
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

const destroyData = async () => {
    try {
        await Project.deleteMany();
        await Skill.deleteMany();
        await Book.deleteMany();
        await Playlist.deleteMany();

        console.log('Data Destroyed!');
        process.exit();
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

if (process.argv[2] === '-d') {
    destroyData();
} else {
    importData();
}