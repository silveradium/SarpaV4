// snakes.js

const snakes = [
    {
        id: '1',

        english:
        {
            name: "Russel's Viper",
            scientific: '-Daboia russelii',
            description: 'Highly venomous Asian snake with diamond patterns, major cause of snakebite fatalities.',
            image: require('../assets/snakeImages/Russell_s Viper1.jpg'),
        },
        sinhala:
        {
            name: "රසෙල්ස් වයිපර්",
            scientific: '-ඩබොයියා රසෙල්ස්ලි',
            description: 'බුදුවාදය අනුව දමන ආසියානු සත්වයක්, සත්වයේ මහා මාර්ගයක්.',
            image: require('../assets/snakeImages/Russell_s Viper1.jpg'),
        },
        tamil:
        {
            name: "ரஸ்ஸெல்ஸ் வைபர்",
            scientific: '-டபோயா ரஸ்ஸெல்லீ',
            description: 'பெரும் விஷம் உள்ள ஆசிய பாம்பு, பாம்பு கொலைகளின் முக்கிய காரணமாகும்.',
            image: require('../assets/snakeImages/Russell_s Viper1.jpg'),
        },

    },
    {
        id: '2',
        english:
        {
            name: 'Common Krait',
            scientific: '-Bungarus caeruleus',
            description: 'Highly venomous elapid of Indian subcontinent, slender with black and white bands.',
            image: require('../assets/snakeImages/common krait.jpg'),
        },
        sinhala:
        {
            name: "සාම්පාදු ක්‍රෙයිට්",
            scientific: '-බුන්ගරුස් කැරුලියස්',
            description: 'ඉන්දියානු උපහරණ සිත්වයේ විශාලත්වයානු පැම්බුදු බුදුවාදයක්, කළු සහ සුදු පැටියාවන් සහිතවයානු විශාලත්වයානු පැම්බුදු බුදුවාදයක්, කළු සහ සුදු පැටියාවන් සහිතවයානු විශාලත්වයානු පැම්බුදු බුදුවාදයක්, කළු සහ සුදු පැටියාවන් සහිතවයාන.',
            image: require('../assets/snakeImages/common krait.jpg'),
        },
        tamil:
        {
            name: "பொது கிரைட்",
            scientific: '-புங்கரஸ் சேருலியஸ்',
            description: 'இந்திய உபமண்டலத்தின் அதிசய விஷமான எலபிட், கரும்புத்துண்டுகளுடன் நெருக்கமானது.',
            image: require('../assets/snakeImages/common krait.jpg'),
        },
    },
    {
        id: '3',
        english:
        {
            name: 'Banded Kukri snake ',
            scientific: '-Oligodon arnensis',
            description: 'A non-venomous colubrid snake named for its curved teeth used for slicing eggs and prey.',
            image: require('../assets/snakeImages/banded kukri snake.jpg'),
        },
        sinhala:
        {
            name: "බැන්ඩ්ඩෙඩ් කුක්රි නයියා",
            scientific: '-ඔලිගොඩොන් ඇර්නෙන්සිස්',
            description: 'අවිශාලත්වයානු කොලුබ්රිඩ් පැම්බුදු බුදුවාදයක්, එක්ස් සහ බැන්ඩ් පැටියාවන් සහිතවයානු විශාලත්වයානු කොලුබ්රිඩ් පැම්බුදු බුදුවාදයක්, එක්ස් සහ බැන්ඩ් පැටියාවන් සහිතවයාන.',
            image: require('../assets/snakeImages/banded kukri snake.jpg'),
        },
        tamil:
        {
            name: "பாண்டெட் குக்ரி பாம்பு",
            scientific: '-ஒலிகோடான் ஆர்னென்சிஸ்',
            description: 'அரிசியான கொடியான பாம்பு பெயர், முட்டுகள் மற்றும் விலங்குகளை சிக்குவதற்கு பயன்படுத்தப்படும்.',
            image: require('../assets/snakeImages/banded kukri snake.jpg'),
        },
    },
    {
        id: '4',
        english:
        {
            name: 'Olive Keelback',
            scientific: '-Atretium schistosum',
            description: 'Mildly venomous natricine, olive-green, common near South and Southeast Asian waters.',
            image: require('../assets/snakeImages/olive keelback.jpg'),
        },
        sinhala:
        {
            name: "කුරුලා පැටියා",
            scientific: '-ඇට්රේටියම් ෂිස්ටොසම්',
            description: 'පැම්බුදු බුදුවාදයක්, කුරුලා-කසාලා, දකුණු සහ මධ්‍යම ආසියාවෙහි පැම්බුදු බුදුවාදයක්, කුරුලා-කසාලා, දකුණු සහ මධ්‍යම ආසියාවෙහි පැම්බුදු බුදුවාදයක්, කුරුලා-කසාලා, දකුණු සහ මධ්‍යම ආසියාවෙහි පැම්බුදු බුදුවාදයක්, කුරුලා-කසාලා, දකුණු සහ.',
            image: require('../assets/snakeImages/olive keelback.jpg'),
        },
        tamil:
        {
            name: "ஒலிவ் கீல்பேக்",
            scientific: '-அட்ரெடியம் ஷிஸ்டோசம்',
            description: 'மிதமான விஷம் உள்ள நேட்ரிசின், ஒலிவ்-கிளீன், தெற்கு மற்றும் தெற்கு ஆசிய நீர்களுக்கு அரண்மையானது.',
            image: require('../assets/snakeImages/olive keelback.jpg'),
        },
    },
    {
        id: '5',
        english:
        {
            name: 'Green Pit Viper',
            scientific: '-Trimeresurus trigonocephalus',
            description: 'Moderately venomous, endemic to Sri Lanka, bright green with heat-sensing pits.',
            image: require('../assets/snakeImages/green pit viper.jpg'),
        },
        sinhala:
        {
            name: "කෙසෙලා පැටියා",
            scientific: '-ට්‍රිමෙරෙසුරස් ට්‍රිගොනොස්ලස්',
            description: 'මධ්‍යම බුදුවාදයක්, ශ්‍රී ලංකාවෙහි ප්‍රදේශීය, හිරස් අනුරාධ පැටියාවන්.',
            image: require('../assets/snakeImages/green pit viper.jpg'),
        },
        tamil:
        {
            name: "பச்சை பிட் வைபர்",
            scientific: '-ட்ரிமெரெஸுருஸ் ட்ரிகோனோசெபாலஸ்',
            description: 'மிதமான விஷம் உள்ளது, இலங்கைக்கு உள்ளது, வெள்ளை பிட்டுகளுடன் படிக்கும் பச்சை.',
            image: require('../assets/snakeImages/green pit viper.jpg'),
        },
    },
    {
        id: '6',
        english:
        {
            name: 'Trinket Snake',
            scientific: '-Coelognathus helena',
            description: 'Non-venomous, attractively patterned South Asian colubrid with docile nature.',
            image: require('../assets/snakeImages/trinket snake.jpg'),
        },
        sinhala:
        {
            name: "ට්‍රින්කෙට් පැටියා",
            scientific: '-කොලොග්නැතස් හෙලෙනා',
            description: 'අවිශාලත්වයානු, පැම්බුදු බුදුවාදයක්, සුදු සහ රතු පැටියාවන් සහිතවයානු විශාලත්වයානු කොලුබ්රිඩ් පැම්බුදු බුදුවාදයක්, එක්ස් සහ බැන්ඩ් පැටියාවන් සහිතවයාන.',
            image: require('../assets/snakeImages/trinket snake.jpg'),
        },
        tamil:
        {
            name: "ட்ரிங்கெட் பாம்பு",
            scientific: '-கோலோக்நாதஸ் ஹெலேனா',
            description: 'அருமையான வண்ணம் உள்ள தெற்காசிய கொடியான பாம்பு, அமைதியான பொருள்.',
            image: require('../assets/snakeImages/trinket snake.jpg'),
        }

    },
    {
        id: '7',
        english:
        {
            name: 'Saw-scaled Viper',
            scientific: '-Echis carinatus',
            description: 'Highly venomous, inhabits dry Middle East and Indian subcontinent, known for "sizzling" sound.',
            image: require('../assets/snakeImages/saw-scaled viper.jpg'),
        },
        sinhala:
        {
            name: "සෝ-ස්කැල්ඩ් වයිපර්",
            scientific: '-ඊචිස් කැරිනැටස්',
            description: 'බුදුවාදය අනුව, නිදහස් මධ්‍යම නගර නැගෙනහිර උතුර සහ ඉන්දියානු උපහරණ සිත්වයක්, "සිස්ස්" ශබ්බ හැඳින් දකුණු වයිපර්ක්.',
            image: require('../assets/snakeImages/saw-scaled viper.jpg'),
        },
        tamil:
        {
            name: "சா-ஸ்கேல்ட் வைபர்",
            scientific: '-எசிஸ் கரினாடஸ்',
            description: 'அதிசய விஷமான, உலகம் ம஧்ய கிழக மற்றும் இந்திய உபமண்டலத்தில் வாழும், "சிச்சிலிங்" ஒலி அறியப்படும்.',    
            image: require('../assets/snakeImages/saw-scaled viper.jpg'),
        },
    },
];

export default snakes;




