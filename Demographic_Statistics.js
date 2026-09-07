// Demographic_Statistics.js

// 1. यहाँ आप अपना सारा डेटा रख सकते हैं। 
const demographicData = {
    area: 1603.17,        // क्षेत्रफल (km²)
    population: 2882031,  // जनसंख्या
    density: 1800,        // लोग / km²
    panchayats: 62,       // ग्राम पंचायतें
    blocks: 10,            // ब्लॉक (इसे आप 7, 9 जो भी चाहें कर सकते हैं)
    literacy: 78.75       // साक्षरता दर (%)
};

document.addEventListener('DOMContentLoaded', () => {
    
    // 2. HTML में 'data-target' को नए डेटा से बदलना
    if(document.getElementById('stat-area')) document.getElementById('stat-area').setAttribute('data-target', demographicData.area);
    if(document.getElementById('stat-pop')) document.getElementById('stat-pop').setAttribute('data-target', demographicData.population);
    if(document.getElementById('stat-density')) document.getElementById('stat-density').setAttribute('data-target', demographicData.density);
    if(document.getElementById('stat-gp')) document.getElementById('stat-gp').setAttribute('data-target', demographicData.panchayats);
    if(document.getElementById('stat-blocks')) document.getElementById('stat-blocks').setAttribute('data-target', demographicData.blocks);
    if(document.getElementById('stat-lit')) document.getElementById('stat-lit').setAttribute('data-target', demographicData.literacy);

    // 3. काउंटर एनीमेशन इंजन (जो 0 से शुरू होकर आपके दिए नंबर तक जाएगा)
    const counters = document.querySelectorAll('.counter-value');
    const speed = 100; // एनीमेशन की स्पीड (नंबर जितना कम होगा, एनीमेशन उतना तेज़ होगा)

    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;

            // इंक्रीमेंट स्टेप कैलकुलेट करना
            const inc = target / speed;

            if (count < target) {
                // यह चेक करने के लिए कि नंबर दशमलव (decimal) में है या नहीं
                if (target % 1 !== 0) {
                    counter.innerText = (count + inc).toFixed(2);
                } else {
                    counter.innerText = Math.ceil(count + inc);
                }
                setTimeout(updateCount, 15);
            } else {
                // एनीमेशन पूरा होने पर फाइनल नंबर सेट कर देना
                counter.innerText = target;
            }
        };

        // काउंटर चालू करें
        updateCount();
    });
});