// ===== ROBOCAMP AI ASSISTANT =====
// Knowledge base derived from the 2026 Robocamp Handbook

const KB = [
  // DATES & SESSIONS
  {
    tags: ['date','session','when','schedule','summer','june','july','week'],
    q: 'When is Robocamp 2026?',
    a: `Robocamp 2026 has <strong>three sessions</strong>:<br><br>
🟦 <strong>Elementary — Session 1:</strong> June 1–4, 2026<br>
🟩 <strong>Middle School (6th–8th):</strong> June 15–18, 2026<br>
🟧 <strong>Elementary — Session 2:</strong> July 13–16, 2026<br><br>
All sessions run <strong>Monday–Thursday, 9:00 am – 5:00 pm</strong>.`
  },
  {
    tags: ['elementary','elem','grade','age','young','kids'],
    q: 'Which grades are the elementary sessions for?',
    a: `The <strong>Elementary School sessions</strong> are for younger campers (grades K–5). There are two sessions: <strong>June 1–4</strong> and <strong>July 13–16</strong>. Activities include FLL robots, Snap Circuits, Elephant Toothpaste, and more!`
  },
  {
    tags: ['middle school','middle','6th','7th','8th','teen'],
    q: 'What is the middle school session?',
    a: `The <strong>Middle School session</strong> is for students in grades <strong>6th–8th</strong> and runs <strong>June 15–18, 2026</strong>. Campers build and program real FTC (FIRST Tech Challenge) robots, drive competition robots, and work with CAD software.`
  },
  // COST & REGISTRATION
  {
    tags: ['cost','price','how much','fee','pay','payment','money','register','registration'],
    q: 'How much does Robocamp cost?',
    a: `<strong>Registration fee:</strong><br>
• <strong>$325</strong> — without lunch<br>
• <strong>$350</strong> — with daily Domino's Pizza lunch<br><br>
Payment is processed through <strong>rrisdpay.com</strong> (Government Window). A <strong>3% processing fee</strong> applies. Slots are <strong>first-come, first-served</strong>. Payment deadline: <strong>Monday, June 1st</strong>.`
  },
  {
    tags: ['lunch','food','eat','meal','dominos','pizza'],
    q: 'Is lunch provided?',
    a: `Lunch from <strong>Domino's Pizza</strong> is provided daily if you pay the <strong>$350 option</strong> (+$25 over the base price). If you choose the $325 option, campers should <strong>bring their own lunch</strong>. Snacks are provided either way!`
  },
  {
    tags: ['register','sign up','enroll','spot','availability','waitlist','full'],
    q: 'How do I register my child?',
    a: `Register online via the link or QR code on the camp flyer. Spots are <strong>limited</strong> and filled on a <strong>first-come, first-served</strong> basis. If a session is full, you can join the <strong>waitlist</strong>. Complete registration at <strong><a href="https://westwoodrobots.org/robocamp" target="_blank">westwoodrobots.org/robocamp</a></strong>.`
  },
  // LOCATION
  {
    tags: ['where','location','address','place','campus','school','makerspace'],
    q: 'Where is Robocamp held?',
    a: `Robocamp is held at:<br><br>
📍 <strong>Westwood High School — Makerspace (Room C1307)</strong><br>
12400 Mellow Meadow Dr, Austin, TX 78750<br><br>
Drop-off and pick-up are at the <strong>Main Entrance</strong>.`
  },
  // DROP-OFF & PICK-UP
  {
    tags: ['drop off','pickup','pick up','drop','arrive','leave','parent','car'],
    q: 'Where do I drop off and pick up my child?',
    a: `Use the <strong>Main Entrance</strong> of Westwood High School (marked with a blue circle on the campus map).<br><br>
• <strong>Drop-off:</strong> 9:00 am<br>
• <strong>Pick-up:</strong> 5:00 pm<br><br>
Please be on time — counselors supervise until 5:15 pm.`
  },
  // WHAT TO BRING
  {
    tags: ['bring','pack','need','list','supply','supplies','backpack','shoe','clothes','water','snack'],
    q: 'What should my child bring to camp?',
    a: `<strong>Please bring:</strong><br>
✅ Reusable water bottle<br>
✅ Extra snacks<br>
✅ Lunch (if not opting for pizza)<br>
✅ <strong>Closed-toed shoes</strong> (required for safety!)<br>
✅ Sunscreen (pre-applied + extra)<br>
✅ Backpack<br>
✅ Swim clothes (for Splash Day on Thursday!)<br>
✅ Positive attitude 😊<br><br>
<strong>Provided by camp:</strong> safety goggles, computers, activity materials, snacks.`
  },
  {
    tags: ['shoe','shoes','open toe','sandal','flip flop','footwear'],
    q: 'What shoes should my child wear?',
    a: `Campers <strong>must wear closed-toed shoes</strong> every day for safety in the Makerspace. No sandals, flip-flops, or open-toed shoes.`
  },
  {
    tags: ['swim','water','splash','splash day','swimming','thursday','pool','wet'],
    q: 'Is there a water/splash day?',
    a: `Yes! <strong>Splash Day</strong> is on <strong>Thursday</strong> (the last day) for both sessions. Please send your child with <strong>swim clothes to change into</strong>. It's listed as "Human Bubble" in the elementary schedule and involves outdoor water activities!`
  },
  // SAFETY & RULES
  {
    tags: ['safe','safety','rule','rules','behavior','conduct','weapon','drug'],
    q: 'What are the behavior rules?',
    a: `Campers must:<br>
• Have no weapons, alcohol, or drugs<br>
• Wear appropriate clothing<br>
• Be safe at all times — no harm to self, others, or property<br>
• Respect and follow all volunteer instructions<br>
• Be kind and supportive to others<br>
• Stick to the published schedule<br><br>
<strong>Consequences</strong> range from temporary removal to suspension from camp (no refund). Police may be notified for illegal acts.`
  },
  {
    tags: ['makerspace','tool','power tool','machine','equipment'],
    q: 'Are power tools used at camp?',
    a: `<strong>All power tools are off-limits</strong> during Robocamp. Heavy machinery is taped off. Any robots built are "no-cut" robots. Handheld power tools are stored securely out of reach. The camp prioritizes <strong>full safety at all times</strong>.`
  },
  {
    tags: ['food','snack','eat','makerspace','candy','table'],
    q: 'Are there food rules in the Makerspace?',
    a: `• <strong>Snacks are NOT allowed</strong> in the Makerspace (eaten during snack break outside the space)<br>
• <strong>Lunch CAN be eaten</strong> in the Makerspace<br>
• Students must wash hands regularly and clean up after eating<br>
• No food left on tables or floors`
  },
  // MEDICAL & HEALTH
  {
    tags: ['medicine','medication','nurse','medical','health','sick','allergy','allergies','epipen','inhaler'],
    q: 'What is the medical/medication policy?',
    a: `<strong>Important medical policies:</strong><br>
• There is <strong>NO nurse on campus</strong><br>
• Camp staff will <strong>NOT administer medication</strong> (except in emergencies)<br>
• If your child needs medication during the day, a <strong>parent/guardian must come to campus</strong> to administer it<br>
• <strong>Disclose all allergies</strong> and medical conditions on the registration form<br>
• Parents must consent to emergency medical treatment in the waiver`
  },
  {
    tags: ['waiver','consent','sign','form','legal','injury'],
    q: 'Is there a waiver to sign?',
    a: `Yes. <strong>All campers must have a signed waiver</strong> to participate. The waiver covers:<br>
• Emergency medical treatment consent<br>
• Release of liability for injuries or damages<br>
• Media consent (photos may be published by Westwood Robotics)<br><br>
A parent or guardian signature is required.`
  },
  // ACTIVITIES
  {
    tags: ['activity','activities','what do','do','build','robot','robotics','program','code','science'],
    q: 'What activities will my child do?',
    a: `Robocamp offers <strong>30+ activities</strong>! Highlights include:<br><br>
🤖 <strong>Robotics:</strong> FLL Robot Build & Code, FTC Build, Drive FTC/FRC robots<br>
🔬 <strong>Science:</strong> Elephant Toothpaste, Oobleck, Lava Lamp, Rain Cloud in a Jar, Lemon Battery<br>
🛠️ <strong>Engineering:</strong> Build a Bridge, Egg Drop, Paper Airplanes, Bristle Bots<br>
💻 <strong>Tech:</strong> TinkerCAD (3D printing!), Snap Circuits, Glowforge laser cutter, Hour of Code<br>
🍕 <strong>Fun extras:</strong> Homemade Ice Cream, Solar Pizza Oven, Paracord Bracelets, Dodgeball<br><br>
Campers keep their <strong>3D-printed designs</strong> and a <strong>custom laser-cut pendant</strong> at week's end!`
  },
  {
    tags: ['3d print','tinkercad','cad','print','design','take home','keep'],
    q: 'Do campers take anything home?',
    a: `Yes! Campers get to take home:<br>
🎨 Their <strong>3D-printed TinkerCAD design</strong> (printed during the week)<br>
🔹 A <strong>custom laser-cut pendant</strong> made on the Glowforge<br>
🍦 Homemade ice cream on Thursday!`
  },
  {
    tags: ['ftc','ftl','fll','frc','first','lego','league','tech','challenge','competition'],
    q: 'What is FTC/FLL/FRC?',
    a: `<strong>FIRST robotics programs:</strong><br>
🟡 <strong>FLL</strong> (FIRST LEGO League) — Used in <strong>Elementary sessions</strong>. Kids build and program LEGO Mindstorms robots.<br>
🔵 <strong>FTC</strong> (FIRST Tech Challenge) — Used in <strong>Middle School session</strong>. Larger robots programmed with Java on REV hardware.<br>
🔴 <strong>FRC</strong> (FIRST Robotics Competition) — Large competition robots. Campers get to <strong>drive them</strong> during demo rotations!`
  },
  // SCHEDULE
  {
    tags: ['schedule','time','daily','day','hour','morning','afternoon','routine'],
    q: 'What is the daily schedule?',
    a: `A typical camp day runs:<br><br>
⏰ <strong>9:00–9:30 am</strong> — Check-in & warm-up activities<br>
🔬 <strong>9:30–11:00 am</strong> — Rotation activities (3 × 30 min)<br>
🍎 <strong>11:00–11:20 am</strong> — Snack break<br>
🛠️ <strong>11:20 am–12:20 pm</strong> — Main activity<br>
🍕 <strong>12:20–1:00 pm</strong> — Lunch<br>
🤖 <strong>1:00–2:15 pm</strong> — Main activity / robotics<br>
⚽ <strong>2:15–3:00 pm</strong> — Rec time (Dodgeball!)<br>
🎬 <strong>3:00–3:30 pm</strong> — Snack & movie/presentation<br>
🤖 <strong>3:30–4:45 pm</strong> — Robot build/code<br>
🏠 <strong>4:45–5:15 pm</strong> — Check-out<br><br>
See the <a href="schedule.html">full schedule page</a> for day-by-day details!`
  },
  // CONTACT
  {
    tags: ['contact','email','reach','question','help','staff','counselor','volunteer'],
    q: 'How do I contact Robocamp?',
    a: `<strong>Contact Westwood Robotics:</strong><br>
📧 Email: <a href="mailto:westwood_robotics@roundrockisd.org">westwood_robotics@roundrockisd.org</a><br>
🌐 Website: <a href="https://westwoodrobots.org/robocamp" target="_blank">westwoodrobots.org/robocamp</a><br>
📸 Instagram: <a href="https://instagram.com/ww_robotics" target="_blank">@ww_robotics</a>`
  },
  {
    tags: ['refund','cancel','cancellation','money back'],
    q: 'What is the refund/cancellation policy?',
    a: `If a camper is <strong>suspended</strong> from camp for rule violations, <strong>no refund</strong> is issued. For other cancellations, contact the camp directly at <a href="mailto:westwood_robotics@roundrockisd.org">westwood_robotics@roundrockisd.org</a>.`
  },
  {
    tags: ['photo','picture','media','photo release','published','image'],
    q: 'Will my child be photographed?',
    a: `Yes — by participating in Robocamp, parents agree to allow <strong>photos of their child to be published</strong> and used by Westwood Robotics for promotional purposes. This is included in the registration waiver.`
  }
];

const GREETINGS = ['hi','hello','hey','howdy','good morning','good afternoon','what up','sup'];
const THANKS = ['thank','thanks','thx','great','awesome','perfect','got it','helpful'];

function findAnswer(input) {
  const q = input.toLowerCase().trim();

  // Greeting
  if (GREETINGS.some(g => q.startsWith(g) || q === g)) {
    return `Hi there! 👋 I'm the <strong>Robocamp Assistant</strong> — I can answer questions about camp dates, cost, activities, rules, what to bring, and more. What would you like to know?`;
  }
  // Thanks
  if (THANKS.some(t => q.includes(t))) {
    return `You're welcome! Feel free to ask anything else about Robocamp 2026. 😊`;
  }

  // Score each KB entry
  let best = null, bestScore = 0;
  for (const entry of KB) {
    let score = 0;
    for (const tag of entry.tags) {
      if (q.includes(tag)) score += tag.split(' ').length; // multi-word tags score higher
    }
    if (score > bestScore) { bestScore = score; best = entry; }
  }

  if (best && bestScore >= 1) return best.a;

  // Fallback
  return `I'm not sure about that specific question. Here are some things I can help with:<br><br>
• Camp <strong>dates & sessions</strong><br>
• <strong>Cost</strong> & registration<br>
• <strong>What to bring</strong><br>
• <strong>Activities</strong> & schedule<br>
• <strong>Rules</strong> & safety policies<br>
• Medical & health policies<br>
• Contact information<br><br>
Or email us at <a href="mailto:westwood_robotics@roundrockisd.org">westwood_robotics@roundrockisd.org</a>`;
}

// ===== CHAT UI =====
const QUICK_QUESTIONS = [
  'When is camp?',
  'How much does it cost?',
  'What should I bring?',
  'What activities are there?',
  'Where is it held?',
  'What\'s the medical policy?'
];

function initChat() {
  const fab = document.getElementById('chat-fab');
  const win = document.getElementById('chat-window');
  const closeBtn = document.getElementById('chat-close');
  const input = document.getElementById('chat-input');
  const sendBtn = document.getElementById('chat-send');
  const messages = document.getElementById('chat-messages');
  const typing = document.getElementById('chat-typing');

  if (!fab || !win) return;

  // Open/close
  fab.addEventListener('click', () => {
    win.classList.toggle('open');
    fab.querySelector('.chat-badge')?.remove();
    if (win.classList.contains('open') && messages.children.length <= 1) {
      setTimeout(showWelcome, 200);
    }
  });
  closeBtn?.addEventListener('click', () => win.classList.remove('open'));

  // Send
  sendBtn?.addEventListener('click', sendMessage);
  input?.addEventListener('keydown', e => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(); }
  });

  function showWelcome() {
    addBotMessage(`Welcome to <strong>Robocamp 2026</strong>! 🤖<br>I can answer questions about camp dates, registration, activities, rules, and more. Try asking me:`, false);
    addChips(QUICK_QUESTIONS.slice(0, 4));
  }

  function addBotMessage(html, scroll = true) {
    const div = document.createElement('div');
    div.className = 'chat-msg bot';
    div.innerHTML = `<div class="chat-msg-bubble">${html}</div>`;
    messages.insertBefore(div, typing);
    if (scroll) scrollBottom();
  }

  function addUserMessage(text) {
    const div = document.createElement('div');
    div.className = 'chat-msg user';
    div.innerHTML = `<div class="chat-msg-bubble">${escapeHtml(text)}</div>`;
    messages.insertBefore(div, typing);
    scrollBottom();
  }

  function addChips(questions) {
    const div = document.createElement('div');
    div.className = 'chat-msg bot';
    const chips = questions.map(q => `<button class="chip" onclick="askChip(this,'${q.replace(/'/g,"\\'")}')">${q}</button>`).join('');
    div.innerHTML = `<div class="quick-chips">${chips}</div>`;
    messages.insertBefore(div, typing);
    scrollBottom();
  }

  function showTyping() {
    typing.classList.add('visible');
    scrollBottom();
  }
  function hideTyping() { typing.classList.remove('visible'); }

  function sendMessage() {
    const text = input?.value.trim();
    if (!text) return;
    input.value = '';
    addUserMessage(text);
    showTyping();
    setTimeout(() => {
      hideTyping();
      const answer = findAnswer(text);
      addBotMessage(answer);
    }, 600 + Math.random() * 400);
  }

  function scrollBottom() {
    setTimeout(() => { messages.scrollTop = messages.scrollHeight; }, 50);
  }

  // Global chip handler
  window.askChip = function(btn, question) {
    btn.closest('.chat-msg').remove();
    addUserMessage(question);
    showTyping();
    setTimeout(() => {
      hideTyping();
      addBotMessage(findAnswer(question));
    }, 700);
  };
}

function escapeHtml(s) {
  return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

document.addEventListener('DOMContentLoaded', initChat);
