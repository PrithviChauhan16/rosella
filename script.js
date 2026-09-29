// ==========================================
// 1. DATABASES
// ==========================================

// Tests and Packages Database (Opens Big Card Modal)
const hodDatabase = {
    "pet-ct": {
        title: "Whole Body PET-CT Scan (FDG)", subtitle: "Radiology | Molecular Imaging", origPrice: "₹18000", price: "₹11999",
        alsoKnownAs: ["PET Scan Whole Body", "FDG PET CT", "Whole Body Cancer Screening"],
        description: "A Whole Body PET-CT scan combines Positron Emission Tomography (PET) and Computed Tomography (CT) into a single exam to detect cellular metabolic activity and accurately localize anatomical changes.",
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
        description: "High-frequency sound waves evaluate organs in the abdomen, including the liver, gallbladder, spleen, pancreas, kidneys, urinary bladder, and prostate/uterus.",
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
        description: "A lipid profile is a blood test that measures the amount of cholesterol and triglycerides in your blood to evaluate risk of cardiovascular disorders.",
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
        description: "Total Care Checkup is one of the most popular packages at Dr. OPG. It consists of comprehensive tests to evaluate vital organs and blood health.",
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
        description: "Comprehensive geriatric screening tailored specifically for senior men, covering prostate PSA markers, cardiac evaluation, bone density vitamins, and vital organ function.",
        parametersCount: "99 Test Parameters",
        parameters: [
            { name: "Prostate-Specific Antigen (Total PSA)", count: "1 Parameter", desc: "Prostate enlargement and screening biomarker." },
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
        description: "Tailored screening designed for the health needs of senior women. Covers post-menopausal bone density, thyroid hormones, Vitamin D3/B12, and comprehensive organ vitality.",
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

// Services & Doctors Database (Opens CarePlus Dynamic Modal)
const careplusStore = {
    service: {
        'ophthalmology': { 
            title: 'Ophthalmology', 
            subtitle: 'Advanced Eye Care Department', 
            bg: 'bg-blue-600', 
            color: 'text-blue-600', 
            icon: 'fa-eye', 
            content: `
                <p>Our Ophthalmology department provides comprehensive medical and surgical eye care. We employ cutting-edge technology for precise vision diagnostics and effective treatment protocols.</p>
                <div class="mt-4 space-y-2 text-sm text-gray-700">
                    <p><strong>• Cataract Surgery:</strong> Micro-incision techniques with premium multifocal and toric lens implantation.</p>
                    <p><strong>• Vision Correction:</strong> Comprehensive pre-LASIK workup and refractive surgery evaluations.</p>
                    <p><strong>• Glaucoma Clinic:</strong> Non-contact tonometry, computerized visual field testing, and retinal nerve fiber analysis.</p>
                    <p><strong>• Advanced Diagnostics:</strong> High-resolution optical coherence tomography (OCT) and fundus imaging.</p>
                </div>` 
        },
        'cardiology': { 
            title: 'Cardiology', 
            subtitle: 'Heart & Vascular Care', 
            bg: 'bg-red-600', 
            color: 'text-red-600', 
            icon: 'fa-heart-pulse', 
            content: `
                <p>Dedicated to delivering superior preventive and diagnostic cardiac care. Our state-of-the-art non-invasive cardiology lab ensures rapid and reliable assessments.</p>
                <div class="mt-4 space-y-2 text-sm text-gray-700">
                    <p><strong>• Echocardiography:</strong> High-definition 2D Echo and Color Doppler to evaluate cardiac anatomy and valves.</p>
                    <p><strong>• Stress Testing (TMT):</strong> Treadmill stress tests to screen for exercise-induced ischemia.</p>
                    <p><strong>• Rhythm Monitoring:</strong> 24-hour digital Holter monitoring and continuous rhythm evaluation.</p>
                    <p><strong>• Instant ECG:</strong> Computerized 12-lead electrocardiograms with immediate specialist reporting.</p>
                </div>` 
        },
        'dentistry': { 
            title: 'Dental Care & OPG', 
            subtitle: 'Complete Oral Diagnostics', 
            bg: 'bg-teal-600', 
            color: 'text-teal-600', 
            icon: 'fa-tooth', 
            content: `
                <p>Experience precise, comfortable oral healthcare. We offer comprehensive diagnostic radiology alongside modern restorative consultations.</p>
                <div class="mt-4 space-y-2 text-sm text-gray-700">
                    <p><strong>• Digital OPG X-Rays:</strong> Full-mouth panoramic radiographic imaging with ultra-low radiation dosage.</p>
                    <p><strong>• Endodontic Workup:</strong> High-magnification diagnostic imaging for painless, precise root canal therapies.</p>
                    <p><strong>• Orthodontic Assessment:</strong> Cephalometric and dental alignments for braces and clear aligners.</p>
                    <p><strong>• Implant Diagnostics:</strong> Accurate alveolar bone dimension assessment for implant planning.</p>
                </div>` 
        },
        'orthopedics': { 
            title: 'Orthopedics & Imaging', 
            subtitle: 'Bone & Joint Specialists', 
            bg: 'bg-orange-600', 
            color: 'text-orange-600', 
            icon: 'fa-bone', 
            content: `
                <p>Specialized musculoskeletal diagnostics tailored to relieve pain, restore mobility, and protect bone longevity across all ages.</p>
                <div class="mt-4 space-y-2 text-sm text-gray-700">
                    <p><strong>• Digital Radiography:</strong> High-frequency skeletal X-rays for instant trauma and fracture evaluation.</p>
                    <p><strong>• Bone Density (DEXA):</strong> Dual-energy X-ray absorptiometry for early osteoporosis screening.</p>
                    <p><strong>• Joint Assessment:</strong> Diagnostic imaging and physical evaluation for osteoarthritis and cartilage loss.</p>
                    <p><strong>• Sports Medicine:</strong> Ligament, tendon, and soft-tissue injury profiling.</p>
                </div>` 
        },
        'neurology': { 
            title: 'Neurology', 
            subtitle: 'Brain & Nervous System Health', 
            bg: 'bg-purple-600', 
            color: 'text-purple-600', 
            icon: 'fa-brain', 
            content: `
                <p>Advanced diagnostic evaluation for central and peripheral nervous system conditions, led by specialized clinical protocols.</p>
                <div class="mt-4 space-y-2 text-sm text-gray-700">
                    <p><strong>• Electroencephalogram (EEG):</strong> Digital brainwave mapping for seizure and epilepsy assessment.</p>
                    <p><strong>• Nerve Conduction (NCV / EMG):</strong> Electrophysiological evaluations for peripheral neuropathies.</p>
                    <p><strong>• Headache Clinic:</strong> Comprehensive diagnostic roadmaps for chronic migraines and vascular headaches.</p>
                    <p><strong>• Neuro-Vascular Screening:</strong> Carotid Doppler sonography for stroke risk identification.</p>
                </div>` 
        },
        'pediatrics': { 
            title: 'Pediatrics', 
            subtitle: 'Child Health & Wellness', 
            bg: 'bg-pink-600', 
            color: 'text-pink-600', 
            icon: 'fa-baby', 
            content: `
                <p>Compassionate, child-centric medical diagnostics designed to make healthcare comfortable for newborns, toddlers, and young adolescents.</p>
                <div class="mt-4 space-y-2 text-sm text-gray-700">
                    <p><strong>• Pediatric Phlebotomy:</strong> Experienced phlebotomists using micro-sampling needles for pain-free blood draw.</p>
                    <p><strong>• Neonatal Screening:</strong> Essential early metabolic and developmental health profiles.</p>
                    <p><strong>• Allergy & Immunity Panels:</strong> Comprehensive food and environmental allergen testing.</p>
                    <p><strong>• Growth & Nutrition:</strong> Diagnostic panels for pediatric anemia, calcium balance, and growth vitamins.</p>
                </div>` 
        }
    },
    doctor: {
        'dr_sarah': { 
            title: 'Dr. Sarah Smith', 
            subtitle: 'Senior Ophthalmologist (MBBS, MS)', 
            img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', 
            content: `
                <p class="leading-relaxed">Dr. Sarah Smith brings over 15 years of distinguished experience in clinical ophthalmology, microsurgery, and anterior segment diagnostics. She has evaluated and successfully managed over 10,000 patient cases.</p>
                <div class="bg-gray-50 p-4 rounded-xl mt-4 border border-gray-100 text-sm space-y-1.5">
                    <p><strong><i class="fa-solid fa-graduation-cap text-hod-red mr-1.5"></i> Qualifications:</strong> MBBS, MS (Ophthalmology) - Gold Medalist</p>
                    <p><strong><i class="fa-solid fa-award text-hod-red mr-1.5"></i> Specialization:</strong> Refractive Surgeries, Cataract & Cornea</p>
                    <p><strong><i class="fa-regular fa-clock text-hod-red mr-1.5"></i> OPD Hours:</strong> Mon, Wed, Fri (10:00 AM - 4:00 PM)</p>
                </div>` 
        },
        'dr_john': { 
            title: 'Dr. John Doe', 
            subtitle: 'Head of Cardiology (MD, DM)', 
            img: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', 
            content: `
                <p class="leading-relaxed">Dr. John Doe is a consultant cardiologist specializing in non-invasive cardiac imaging, preventive heart health protocols, and stress echocardiography. He leads the cardiovascular diagnostic team.</p>
                <div class="bg-gray-50 p-4 rounded-xl mt-4 border border-gray-100 text-sm space-y-1.5">
                    <p><strong><i class="fa-solid fa-graduation-cap text-hod-red mr-1.5"></i> Qualifications:</strong> MBBS, MD (Medicine), DM (Cardiology)</p>
                    <p><strong><i class="fa-solid fa-award text-hod-red mr-1.5"></i> Specialization:</strong> Echocardiography, Coronary Risk Profiling</p>
                    <p><strong><i class="fa-regular fa-clock text-hod-red mr-1.5"></i> OPD Hours:</strong> Tue, Thu, Sat (11:00 AM - 5:00 PM)</p>
                </div>` 
        },
        'dr_emily': { 
            title: 'Dr. Emily Chen', 
            subtitle: 'Senior Radiologist & Dental Imaging', 
            img: 'https://images.unsplash.com/photo-1594824436998-058d01e6a188?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', 
            content: `
                <p class="leading-relaxed">Dr. Emily Chen specializes in maxillofacial diagnostic imaging, high-resolution Digital OPG reporting, and musculoskeletal ultrasonography, maintaining exceptional reporting turnaround times.</p>
                <div class="bg-gray-50 p-4 rounded-xl mt-4 border border-gray-100 text-sm space-y-1.5">
                    <p><strong><i class="fa-solid fa-graduation-cap text-hod-red mr-1.5"></i> Qualifications:</strong> BDS, MDS (Oral Medicine & Radiology)</p>
                    <p><strong><i class="fa-solid fa-award text-hod-red mr-1.5"></i> Specialization:</strong> Digital Panoramic Radiography (OPG), CBCT</p>
                    <p><strong><i class="fa-regular fa-clock text-hod-red mr-1.5"></i> OPD Hours:</strong> Mon to Sat (9:00 AM - 3:00 PM)</p>
                </div>` 
        },
        'dr_michael': { 
            title: 'Dr. Michael Brown', 
            subtitle: 'Consultant Orthopedic Surgeon', 
            img: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', 
            content: `
                <p class="leading-relaxed">Dr. Michael Brown is an established authority in joint pathology, fracture reconstruction, and sports injury diagnostics, with extensive experience in clinical rehabilitation.</p>
                <div class="bg-gray-50 p-4 rounded-xl mt-4 border border-gray-100 text-sm space-y-1.5">
                    <p><strong><i class="fa-solid fa-graduation-cap text-hod-red mr-1.5"></i> Qualifications:</strong> MBBS, MS (Orthopedics), DNB</p>
                    <p><strong><i class="fa-solid fa-award text-hod-red mr-1.5"></i> Specialization:</strong> Sports Injuries, Arthroscopy & Joint Health</p>
                    <p><strong><i class="fa-regular fa-clock text-hod-red mr-1.5"></i> OPD Hours:</strong> Mon, Wed, Fri (2:00 PM - 7:00 PM)</p>
                </div>` 
        }
    }
};

// ==========================================
// 2. MODAL CONTROLS (FIXED & TESTED)
// ==========================================

// CarePlus Modal (Services & Doctors)
function openModal(type, id) {
    const data = careplusStore[type]?.[id];
    if (!data) return;

    const modal = document.getElementById('dynamic-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalSubtitle = document.getElementById('modal-subtitle');
    const modalBody = document.getElementById('modal-body');
    const modalVisualContainer = document.getElementById('modal-visual-container');
    const modalHeader = document.getElementById('modal-header');

    if (!modal || !modalTitle || !modalSubtitle || !modalBody || !modalVisualContainer || !modalHeader) return;

    modalTitle.innerText = data.title;
    modalSubtitle.innerText = data.subtitle;
    modalBody.innerHTML = data.content;

    if (type === 'service') {
        modalHeader.className = `h-36 w-full relative ${data.bg || 'bg-blue-600'}`;
        modalVisualContainer.innerHTML = `<i class="fa-solid ${data.icon} text-3xl ${data.color || 'text-blue-600'}"></i>`;
    } else if (type === 'doctor') {
        modalHeader.className = `h-36 w-full relative bg-gray-900`;
        modalVisualContainer.innerHTML = `<img src="${data.img}" class="w-full h-full object-cover" alt="${data.title}">`;
    }

    // Unhide first, then trigger opacity/scale transition
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    setTimeout(() => {
        modal.classList.add('active');
        document.body.classList.add('modal-open');
    }, 10);
}

function closeStandardModal() {
    const modal = document.getElementById('dynamic-modal');
    if (!modal) return;
    modal.classList.remove('active');
    document.body.classList.remove('modal-open');
    setTimeout(() => {
        modal.classList.remove('flex');
        modal.classList.add('hidden');
    }, 250);
}

// HOD Big Card Modal (Tests & Packages)
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
    document.getElementById('detail-parameters-header').innerHTML = `Includes <span class="text-hod-red font-bold">${item.parametersCount}</span>`;

    const pillsContainer = document.getElementById('detail-also-known-as');
    pillsContainer.innerHTML = item.alsoKnownAs.map(tag => 
        `<span class="border border-red-300 text-hod-red text-xs px-3 py-1 rounded-full bg-red-50/60">${tag}</span>`
    ).join('');

    const paramsContainer = document.getElementById('detail-parameters-list');
    paramsContainer.innerHTML = item.parameters.map((param, index) => `
        <div class="border border-gray-200 rounded-lg overflow-hidden bg-gray-50/40">
            <div onclick="toggleAccordion('param-acc-${index}')" class="flex justify-between items-center px-4 py-3 cursor-pointer hover:bg-gray-100 transition select-none">
                <span class="font-bold text-gray-900 text-sm">${param.name}</span>
                <div class="flex items-center gap-2 text-hod-red font-semibold text-xs">
                    <span>${param.count}</span>
                    <i class="fas fa-chevron-down text-[10px] transition-transform duration-200" id="icon-param-acc-${index}"></i>
                </div>
            </div>
            <div id="param-acc-${index}" class="hidden px-4 py-2.5 bg-white text-xs text-gray-600 border-t border-gray-100 leading-relaxed">
                ${param.desc}
            </div>
        </div>
    `).join('');

    const specsContainer = document.getElementById('detail-specializations');
    specsContainer.innerHTML = item.specializations.map(spec => 
        `<span class="border border-red-300 text-hod-red text-xs px-3 py-0.5 rounded-full">${spec}</span>`
    ).join('');

    const modal = document.getElementById('hod-detail-modal');
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    setTimeout(() => {
        modal.classList.add('active');
        document.body.classList.add('modal-open');
    }, 10);
}

function closeDetailCard() {
    const modal = document.getElementById('hod-detail-modal');
    if (!modal) return;
    modal.classList.remove('active');
    document.body.classList.remove('modal-open');
    setTimeout(() => {
        modal.classList.remove('flex');
        modal.classList.add('hidden');
    }, 250);
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
        btnHome.className = "w-1/2 py-2.5 text-center font-bold text-xs bg-hod-red text-white transition";
        btnCentre.className = "w-1/2 py-2.5 text-center font-bold text-xs text-hod-red bg-white hover:bg-gray-50 transition";
    } else {
        btnCentre.className = "w-1/2 py-2.5 text-center font-bold text-xs bg-hod-red text-white transition";
        btnHome.className = "w-1/2 py-2.5 text-center font-bold text-xs text-hod-red bg-white hover:bg-gray-50 transition";
    }
}

function scrollCarousel(id, direction) {
    const container = document.getElementById(id + '-carousel');
    if (container) {
        const scrollAmount = window.innerWidth < 768 ? 320 : 420;
        container.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
    }
}

// ==========================================
// 3. DOM LISTENERS & AUTOMATION
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    // Mobile navigation toggle
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileBtn && mobileMenu) {
        mobileBtn.addEventListener('click', () => mobileMenu.classList.toggle('open'));
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => mobileMenu.classList.remove('open'));
        });
    }

    // Appointment form setup
    const formDate = document.getElementById('form-date');
    if (formDate) formDate.setAttribute('min', new Date().toISOString().split('T')[0]);

    const form = document.getElementById('booking-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const msg = document.getElementById('form-success-msg');
            if (msg) {
                msg.classList.remove('hidden');
                form.reset();
                setTimeout(() => msg.classList.add('hidden'), 5000);
            }
        });
    }

    // Gallery Auto-Slider Logic (4s, 7s, 4s)
    function setupGalleryCard(cardId, intervalMs) {
        const card = document.getElementById(cardId);
        if (!card) return;
        
        const images = card.querySelectorAll('.gallery-img');
        if (images.length === 0) return;

        let currentIndex = 0;
        
        setInterval(() => {
            images[currentIndex].classList.remove('opacity-100');
            images[currentIndex].classList.add('opacity-0');
            
            currentIndex = (currentIndex + 1) % images.length;
            
            images[currentIndex].classList.remove('opacity-0');
            images[currentIndex].classList.add('opacity-100');
        }, intervalMs);
    }

    setupGalleryCard('gallery-card-1', 4000);
    setupGalleryCard('gallery-card-2', 7000);
    setupGalleryCard('gallery-card-3', 4000);

    // Draggable Floating WhatsApp Button
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

    // Close Modals on Background Backdrop Click
    window.addEventListener('click', (e) => {
        const hodModal = document.getElementById('hod-detail-modal');
        const standardModal = document.getElementById('dynamic-modal');
        if (e.target === hodModal) closeDetailCard();
        if (e.target === standardModal) closeStandardModal();
    });

    // Close Modals on Escape Key Press
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeDetailCard();
            closeStandardModal();
        }
    });
});
