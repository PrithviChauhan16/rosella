// ==========================================
// DATABASES
// ==========================================

// 1. Database for HOD Tests and Packages (Opens Big Card)
const hodDatabase = {
    "pet-ct": {
        title: "Whole Body PET-CT Scan (FDG)", subtitle: "Radiology | Molecular Imaging", origPrice: "₹18000", price: "₹11999",
        alsoKnownAs: ["PET Scan Whole Body", "FDG PET CT", "Whole Body Cancer Screening"],
        description: "A Whole Body PET-CT scan combines Positron Emission Tomography (PET) and Computed Tomography (CT) into a single device to pinpoint biochemical changes and exact anatomical structures.",
        parametersCount: "1 Procedure Parameter",
        parameters: [{ name: "Full Body FDG Molecular Scan", count: "1 Parameter", desc: "Covers skull base to mid-thigh or whole body as clinically advised." }],
        preparation: "Overnight fasting (minimum 6 hours). Blood glucose level must be under 150 mg/dL prior to radiotracer injection.",
        tat: "Same Day*", specializations: ["Oncology", "Nuclear Medicine", "Cancer Screening"]
    },
    "cbc": {
        title: "CBC Test", subtitle: "Pathology | Complete Blood Count", origPrice: "₹350", price: "₹199",
        alsoKnownAs: ["Complete Blood Count", "Hemogram", "CBC with ESR"],
        description: "A Complete Blood Count measures different components of blood, including Red Blood Cells, White Blood Cells, Hemoglobin, Hematocrit, and Platelets to detect infections, anemia, and immune disorders.",
        parametersCount: "22 Test Parameters",
        parameters: [
            { name: "Hemoglobin & RBC Count", count: "4 Parameters", desc: "Hb, RBC, PCV / Hematocrit, MCV, MCH, MCHC, RDW." },
            { name: "Total & Differential Leucocyte Count (TLC / DLC)", count: "6 Parameters", desc: "Neutrophils, Lymphocytes, Monocytes, Eosinophils, Basophils." },
            { name: "Platelet Indices", count: "3 Parameters", desc: "Total Platelet Count, MPV, Plateletcrit." }
        ],
        preparation: "No specific fasting required. Normal hydration is recommended.",
        tat: "Same Day*", specializations: ["General Health", "Infection Screening", "Hematology"]
    },
    "ultrasound-abdomen": {
        title: "Ultrasound Whole Abdomen", subtitle: "Radiology | USG Imaging", origPrice: "₹1600", price: "₹999",
        alsoKnownAs: ["USG Abdomen", "Abdominal Sonography", "USG Whole Abdomen & Pelvis"],
        description: "High-frequency sound waves are used to evaluate organs in the abdomen, including the liver, gallbladder, spleen, pancreas, kidneys, urinary bladder, and prostate/uterus.",
        parametersCount: "1 Scan Protocol",
        parameters: [
            { name: "Hepato-Biliary & Pancreatic Evaluation", count: "1 Scan", desc: "Liver size/texture, gallbladder stones/wall, bile ducts, and pancreas." },
            { name: "Renal & Pelvic Evaluation", count: "1 Scan", desc: "Both kidneys, urinary bladder, prostate in males, uterus/adnexa in females." }
        ],
        preparation: "Fasting for 4 to 6 hours. Full urinary bladder required for pelvis evaluation.",
        tat: "Same Day*", specializations: ["Radiology", "Gastroenterology", "Urology"]
    },
    "lipid-profile": {
        title: "Lipid Profile", subtitle: "Pathology | Heart Health", origPrice: "₹650", price: "₹400",
        alsoKnownAs: ["Cholesterol Panel", "Coronary Risk Profile", "Lipid Panel Test"],
        description: "A lipid profile is a blood test that measures the amount of cholesterol and triglycerides in your blood to determine your risk of cardiovascular disease.",
        parametersCount: "8 Test Parameters",
        parameters: [
            { name: "Cholesterol Levels", count: "4 Parameters", desc: "Total Cholesterol, HDL, LDL, VLDL Cholesterol." },
            { name: "Triglycerides & Ratios", count: "4 Parameters", desc: "Total Triglycerides, TC/HDL Ratio, LDL/HDL Ratio, Non-HDL Cholesterol." }
        ],
        preparation: "Overnight fasting (10-12 hours) is strictly recommended.",
        tat: "Same Day*", specializations: ["Cardiology", "General Health", "Preventive Care"]
    },
    "total-care": {
        title: "Total Care Checkup", subtitle: "Health Package | Health Checkup", origPrice: "₹3998", price: "₹1999",
        alsoKnownAs: ["Total Care", "Full Body Checkup Total Care", "Preventive Health Checkup"],
        description: "Total Care Checkup is one of the most popular health checkup packages at Dr. OPG. It consists of a range of tests to provide insight about the vital parameters of your health.",
        parametersCount: "87 Test Parameters",
        parameters: [
            { name: "CBC", count: "22 Parameters", desc: "Complete Hemogram, Platelets, Leucocyte count, Hemoglobin." },
            { name: "Glucose Fasting", count: "1 Parameter", desc: "Blood Sugar Fasting." },
            { name: "Lipid Profile", count: "8 Parameters", desc: "Total Cholesterol, HDL, LDL, VLDL, Triglycerides, Cholesterol ratios." },
            { name: "Iron Profile", count: "3 Parameters", desc: "Serum Iron, TIBC, Transferrin Saturation." },
            { name: "Free Thyroid Test [FT3,FT4,TSH]", count: "3 Parameters", desc: "Free T3, Free T4, Ultrasensitive TSH." },
            { name: "ESR", count: "1 Parameter", desc: "Erythrocyte Sedimentation Rate." },
            { name: "Urine R/M", count: "22 Parameters", desc: "Physical, Chemical, and Microscopic urine evaluation." }
        ],
        preparation: "Overnight Fasting is Preferred (10-12 hours).",
        tat: "Same Day*", specializations: ["Health Checkup", "Preventive Health Checkups"]
    },
    "senior-male": {
        title: "Senior Citizen Checkup - Male", subtitle: "Health Package | Senior Health Checkup", origPrice: "₹8999", price: "₹4999",
        alsoKnownAs: ["Senior Male Checkup", "Geriatric Care Male"],
        description: "Comprehensive geriatric screening tailored specifically for senior men. It covers extensive cardiac evaluation markers, PSA (Prostate-Specific Antigen), bone health vitamins, arthritis profiling, liver, kidney, and metabolic markers.",
        parametersCount: "99 Test Parameters",
        parameters: [
            { name: "Prostate-Specific Antigen (Total PSA)", count: "1 Parameter", desc: "Prostate enlargement and prostate cancer screening marker." },
            { name: "Cardiac Risk Markers", count: "5 Parameters", desc: "Apolipoprotein A1, B, hs-CRP, Homocysteine." },
            { name: "Arthritis & Bone Profile", count: "4 Parameters", desc: "Calcium, Phosphorus, Uric Acid, Vitamin D3." },
            { name: "Liver & Kidney Profiles (LFT & KFT)", count: "20 Parameters", desc: "Bilirubin, SGOT, SGPT, Creatinine, Urea, Electrolytes." },
            { name: "Complete Hemogram (CBC)", count: "22 Parameters", desc: "Full blood cell count, ESR, and platelets." }
        ],
        preparation: "Overnight Fasting for 10 to 12 hours is mandatory.",
        tat: "Same Day*", specializations: ["Senior Care", "Preventive Health Checkups", "Urology"]
    },
    "senior-female": {
        title: "Senior Citizen Checkup - Female", subtitle: "Health Package | Senior Health Checkup", origPrice: "₹8999", price: "₹4999",
        alsoKnownAs: ["Senior Female Checkup", "Geriatric Care Female"],
        description: "Tailored screening designed for the health needs of senior women. Includes post-menopausal bone density and osteoporosis markers, thyroid profile, Vitamin D3 and B12, rheumatoid factor, and complete vital organs assessment.",
        parametersCount: "97 Test Parameters",
        parameters: [
            { name: "Bone Health & Osteoporosis Profile", count: "5 Parameters", desc: "Serum Calcium, Phosphorus, Alkaline Phosphatase, Vitamin D3 25-OH." },
            { name: "Thyroid & Hormone Profile", count: "3 Parameters", desc: "Free T3, Free T4, Sensitive TSH." },
            { name: "Rheumatoid Factor (RA Factor)", count: "1 Parameter", desc: "Arthritis and joint inflammation diagnostic." },
            { name: "Liver & Renal Profiles", count: "20 Parameters", desc: "Liver enzymes, Total protein, Creatinine, Blood Urea Nitrogen, Uric Acid." },
            { name: "Complete Blood Count & ESR", count: "23 Parameters", desc: "Full blood cell evaluation with inflammatory markers." }
        ],
        preparation: "Overnight Fasting for 10 to 12 hours is mandatory.",
        tat: "Same Day*", specializations: ["Senior Care", "Women's Health"]
    }
};

// 2. Database for Original CarePlus Services & Doctors (Opens standard modal)
const careplusStore = {
    service: {
        'ophthalmology': { title: 'Ophthalmology', subtitle: 'Advanced Eye Care Department', bg: 'bg-blue-600', color: 'text-blue-600', icon: 'fa-eye', content: `<p>Our Ophthalmology department provides comprehensive medical and surgical eye care. We use the latest technology for precise diagnostics and effective treatments.</p><ul class="list-disc pl-5 mt-4 space-y-2"><li>Cataract Surgery with premium lenses</li><li>LASIK & Refractive Surgeries</li><li>Glaucoma screening and management</li><li>Pediatric ophthalmology</li></ul>` },
        'cardiology': { title: 'Cardiology', subtitle: 'Heart & Vascular Care', bg: 'bg-red-600', color: 'text-red-600', icon: 'fa-heart-pulse', content: `<p>Dedicated to providing superior cardiac care, from prevention to complex interventions. Our heart specialists are here for you 24/7.</p><ul class="list-disc pl-5 mt-4 space-y-2"><li>Non-Invasive Testing (ECG, Echo, TMT)</li><li>Interventional Cardiology (Angiography, Stenting)</li><li>Preventive heart health checkups</li></ul>` },
        'dentistry': { title: 'Dental Care', subtitle: 'Complete Oral Health', bg: 'bg-teal-600', color: 'text-teal-600', icon: 'fa-tooth', content: `<p>Experience pain-free dentistry in a relaxing environment. We offer everything from routine cleanings to complete smile makeovers.</p><ul class="list-disc pl-5 mt-4 space-y-2"><li>Cosmetic Dentistry & Teeth Whitening</li><li>Orthodontics (Braces & Clear Aligners)</li><li>Single-visit Root Canals</li><li>Dental Implants</li></ul>` },
        'orthopedics': { title: 'Orthopedics', subtitle: 'Bone & Joint Specialists', bg: 'bg-orange-600', color: 'text-orange-600', icon: 'fa-bone', content: `<p>Comprehensive care for the musculoskeletal system to restore mobility, alleviate pain, and improve your quality of life.</p><ul class="list-disc pl-5 mt-4 space-y-2"><li>Total Knee & Hip Replacements</li><li>Sports Medicine & Arthroscopy</li><li>Trauma & Fracture Care</li><li>Physiotherapy & Rehab</li></ul>` },
        'neurology': { title: 'Neurology', subtitle: 'Brain & Nervous System', bg: 'bg-purple-600', color: 'text-purple-600', icon: 'fa-brain', content: `<p>Expert diagnosis and management of complex neurological disorders by leading specialists in the field.</p><ul class="list-disc pl-5 mt-4 space-y-2"><li>Stroke Management & Prevention</li><li>Epilepsy & Seizure Care</li><li>Headache & Migraine Clinics</li><li>Movement Disorders (Parkinson's)</li></ul>` },
        'pediatrics': { title: 'Pediatrics', subtitle: 'Child Health & Wellness', bg: 'bg-pink-600', color: 'text-pink-600', icon: 'fa-baby', content: `<p>Compassionate and specialized medical care for infants, children, and adolescents, ensuring healthy growth and development.</p><ul class="list-disc pl-5 mt-4 space-y-2"><li>Newborn Care & Vaccinations</li><li>Nutritional Counseling</li><li>Management of Childhood Illnesses</li><li>Developmental Assessments</li></ul>` }
    },
    doctor: {
        'dr_sarah': { title: 'Dr. Sarah Smith', subtitle: 'Senior Ophthalmologist', img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', content: `<p>Dr. Smith is a renowned expert in refractive surgery and cataract management. She has successfully performed over 10,000 surgeries.</p><p class="mt-4"><strong>Education:</strong> MD Ophthalmology, Harvard Medical School.</p><p class="mt-2"><strong>Availability:</strong> Mon, Wed, Fri (9:00 AM - 4:00 PM)</p>` },
        'dr_john': { title: 'Dr. John Doe', subtitle: 'Head of Cardiology', img: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', content: `<p>Dr. Doe specializes in interventional cardiology and preventive heart care. He leads the emergency cardiac team at CarePlus.</p><p class="mt-4"><strong>Education:</strong> DM Cardiology, Johns Hopkins University.</p><p class="mt-2"><strong>Availability:</strong> Tue, Thu, Sat (10:00 AM - 6:00 PM)</p>` },
        'dr_emily': { title: 'Dr. Emily Chen', subtitle: 'Dental Surgeon', img: 'https://images.unsplash.com/photo-1594824436998-058d01e6a188?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', content: `<p>Dr. Chen is passionate about cosmetic dentistry and restorative procedures, ensuring every patient leaves with a confident smile.</p><p class="mt-4"><strong>Education:</strong> DDS, University of California, San Francisco.</p><p class="mt-2"><strong>Availability:</strong> Mon to Fri (9:00 AM - 5:00 PM)</p>` },
        'dr_michael': { title: 'Dr. Michael Brown', subtitle: 'Orthopedic Specialist', img: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', content: `<p>Dr. Brown is highly skilled in joint replacement and sports medicine. He works closely with athletes to ensure rapid recovery from injuries.</p><p class="mt-4"><strong>Education:</strong> MS Orthopedics, Stanford University.</p><p class="mt-2"><strong>Availability:</strong> Wed, Thu, Fri (8:00 AM - 2:00 PM)</p>` }
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // ------------------------------------------
    // Mobile Menu Toggle
    // ------------------------------------------
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileBtn && mobileMenu) {
        mobileBtn.addEventListener('click', () => mobileMenu.classList.toggle('open'));
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => mobileMenu.classList.remove('open'));
        });
    }

    // ------------------------------------------
    // Booking Form Setup
    // ------------------------------------------
    const formDate = document.getElementById('form-date');
    if (formDate) formDate.setAttribute('min', new Date().toISOString().split('T')[0]);

    const form = document.getElementById('booking-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const msg = document.getElementById('form-success-msg');
            msg.classList.remove('hidden');
            form.reset();
            setTimeout(() => msg.classList.add('hidden'), 5000);
        });
    }

    // ------------------------------------------
    // Draggable WhatsApp Button
    // ------------------------------------------
    const waBtn = document.getElementById('wa-button');
    if (waBtn) {
        let isDragging = false;
        let startX, startY, initialX, initialY, startTime;

        const startDrag = (e) => {
            const evt = e.type.includes('mouse') ? e : e.touches[0];
            startX = evt.clientX;
            startY = evt.clientY;
            const rect = waBtn.getBoundingClientRect();
            initialX = rect.left;
            initialY = rect.top;
            isDragging = false;
            startTime = Date.now();

            if (e.type.includes('mouse')) {
                document.addEventListener('mousemove', drag);
                document.addEventListener('mouseup', endDrag);
            } else {
                document.addEventListener('touchmove', drag, { passive: false });
                document.addEventListener('touchend', endDrag);
            }
        };

        const drag = (e) => {
            const evt = e.type.includes('mouse') ? e : e.touches[0];
            const dx = evt.clientX - startX;
            const dy = evt.clientY - startY;

            if (Math.abs(dx) > 5 || Math.abs(dy) > 5) isDragging = true;

            if (isDragging) {
                if (e.cancelable) e.preventDefault();
                let newLeft = Math.max(0, Math.min(initialX + dx, window.innerWidth - waBtn.offsetWidth));
                let newTop = Math.max(0, Math.min(initialY + dy, window.innerHeight - waBtn.offsetHeight));
                waBtn.style.left = `${newLeft}px`;
                waBtn.style.top = `${newTop}px`;
                waBtn.style.bottom = 'auto';
                waBtn.style.right = 'auto';
            }
        };

        const endDrag = () => {
            document.removeEventListener('mousemove', drag);
            document.removeEventListener('mouseup', endDrag);
            document.removeEventListener('touchmove', drag);
            document.removeEventListener('touchend', endDrag);
            if (!isDragging && (Date.now() - startTime) < 400) {
                window.open('https://wa.me/919911014950?text=Hello%20Dr.%20OPG%20Diagnostics.', '_blank');
            }
        };

        waBtn.addEventListener('mousedown', startDrag);
        waBtn.addEventListener('touchstart', startDrag, { passive: false });
    }
});

// Horizontal carousel scrolling
function scrollCarousel(id, direction) {
    const container = document.getElementById(id + '-carousel');
    if (container) {
        const scrollAmount = window.innerWidth < 768 ? 320 : 420;
        container.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
    }
}


// ==========================================
// HOD DETAIL MODAL LOGIC (Tests & Packages)
// ==========================================
function openDetailCard(key) {
    const item = hodDatabase[key];
    if (!item) return;

    document.getElementById('detail-title').innerText = item.title;
    document.getElementById('detail-subtitle').innerText = item.subtitle;
    document.getElementById('detail-orig-price').innerText = item.origPrice;
    document.getElementById('detail-price').innerText = item.price;
    document.getElementById('detail-description').innerText = item.description;
    document.getElementById('detail-prep-text').innerText = item.preparation;
    document.getElementById('detail-tat-text').innerText = item.tat;
    document.getElementById('detail-parameters-header').innerHTML = `Includes <span class="text-brand-600 font-bold">${item.parametersCount}</span>`;

    // Also Known As Badges
    const pillsContainer = document.getElementById('detail-also-known-as');
    pillsContainer.innerHTML = item.alsoKnownAs.map(tag => 
        `<span class="border border-brand-500 text-brand-600 text-xs px-3 py-1 rounded-full bg-red-50/50">${tag}</span>`
    ).join('');

    // Accordion Parameters List
    const paramsContainer = document.getElementById('detail-parameters-list');
    paramsContainer.innerHTML = item.parameters.map((param, index) => `
        <div class="border border-gray-200 rounded-lg overflow-hidden bg-gray-50/40">
            <div onclick="toggleAccordion('param-acc-${index}')" class="flex justify-between items-center px-4 py-3 cursor-pointer hover:bg-gray-100 transition select-none">
                <span class="font-bold text-gray-900 text-sm">${param.name}</span>
                <div class="flex items-center gap-2 text-brand-600 font-semibold text-xs">
                    <span>${param.count}</span>
                    <i class="fas fa-chevron-down text-[10px] transition-transform duration-200" id="icon-param-acc-${index}"></i>
                </div>
            </div>
            <div id="param-acc-${index}" class="hidden px-4 py-2.5 bg-white text-xs text-gray-600 border-t border-gray-100">
                ${param.desc}
            </div>
        </div>
    `).join('');

    // Specializations Badges
    const specsContainer = document.getElementById('detail-specializations');
    specsContainer.innerHTML = item.specializations.map(spec => 
        `<span class="border border-brand-500 text-brand-600 text-xs px-3 py-0.5 rounded-full">${spec}</span>`
    ).join('');

    // Open Modal
    const modal = document.getElementById('hod-detail-modal');
    modal.classList.remove('hidden');
    setTimeout(() => {
        modal.classList.add('active');
        document.body.classList.add('modal-open');
    }, 10);
}

function closeDetailCard() {
    const modal = document.getElementById('hod-detail-modal');
    modal.classList.remove('active');
    document.body.classList.remove('modal-open');
    setTimeout(() => modal.classList.add('hidden'), 300);
}

function toggleAccordion(id) {
    const el = document.getElementById(id);
    const icon = document.getElementById('icon-' + id);
    if (el) {
        el.classList.toggle('hidden');
        if (icon) icon.classList.toggle('rotate-180');
    }
}

function checkPincode() {
    const input = document.getElementById('pincode-input');
    const status = document.getElementById('pincode-status');
    if (input && input.value.trim().length === 6) {
        status.innerHTML = `Earliest Home Pickup @ <strong>${input.value}</strong>: Today within 60 minutes*`;
        status.className = "text-xs font-bold text-green-700 mt-2";
    } else {
        status.innerHTML = "Please enter a valid 6-digit pincode";
        status.className = "text-xs font-bold text-red-600 mt-2";
    }
}

function selectVisitType(type) {
    const btnCentre = document.getElementById('btn-visit-centre');
    const btnHome = document.getElementById('btn-visit-home');
    if (type === 'home') {
        btnHome.className = "w-1/2 py-2.5 text-center font-bold text-xs bg-brand-600 text-white transition";
        btnCentre.className = "w-1/2 py-2.5 text-center font-bold text-xs text-brand-600 bg-white hover:bg-gray-50 transition";
    } else {
        btnCentre.className = "w-1/2 py-2.5 text-center font-bold text-xs bg-brand-600 text-white transition";
        btnHome.className = "w-1/2 py-2.5 text-center font-bold text-xs text-brand-600 bg-white hover:bg-gray-50 transition";
    }
}

// ==========================================
// CAREPLUS ORIGINAL MODAL LOGIC (Services & Doctors)
// ==========================================
function openModal(type, id) {
    const data = careplusStore[type]?.[id];
    if(!data) return;

    const modal = document.getElementById('dynamic-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalSubtitle = document.getElementById('modal-subtitle');
    const modalBody = document.getElementById('modal-body');
    const modalVisualContainer = document.getElementById('modal-visual-container');
    const modalHeader = document.getElementById('modal-header');

    modalTitle.innerText = data.title;
    modalSubtitle.innerText = data.subtitle;
    modalBody.innerHTML = data.content;
    
    if (type === 'service') {
        modalHeader.style.backgroundImage = 'none';
        modalHeader.className = `h-40 w-full relative ${data.bg}`;
        modalVisualContainer.innerHTML = `<i class="fa-solid ${data.icon} text-5xl ${data.color}"></i>`;
    } else if (type === 'doctor') {
        modalHeader.className = `h-40 w-full relative bg-gray-900`;
        modalHeader.style.backgroundImage = `url('${data.img}')`;
        modalHeader.style.backgroundPosition = 'center 20%';
        modalHeader.style.backgroundSize = 'cover';
        modalVisualContainer.innerHTML = `<img src="${data.img}" class="w-full h-full object-cover" alt="Profile">`;
    }

    modal.classList.add('active');
    document.body.classList.add('modal-open');
}

function closeStandardModal() {
    const modal = document.getElementById('dynamic-modal');
    modal.classList.remove('active');
    document.body.classList.remove('modal-open');
}

window.addEventListener('click', (e) => {
    const modal1 = document.getElementById('hod-detail-modal');
    const modal2 = document.getElementById('dynamic-modal');
    if (e.target === modal1) closeDetailCard();
    if (e.target === modal2) closeStandardModal();
});
