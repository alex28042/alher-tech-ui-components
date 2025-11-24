
import React from 'react';
import { 
  SplitLoginExample, CardLoginExample, OtpVerificationExample 
} from '../components/examples/AuthExamples';
import { 
  RevenueGrowthExample, ActivityFeedExample 
} from '../components/examples/AnalyticsExamples';
import { 
  MissionControlExample 
} from '../components/examples/ComplexExamples';
import { 
  TeamTableExample, TaskCardsExample 
} from '../components/examples/CrmExamples';
import { 
  PricingCardsExample, StorageWidgetExample 
} from '../components/examples/UtilityExamples';
import { 
  StatusToastsExample, ActionToastExample 
} from '../components/examples/FeedbackExamples';


// ==========================================
// CODE SNIPPETS (Separated for clarity)
// ==========================================

const splitLoginCode = `
<div className="flex w-full h-[450px] rounded-2xl border border-white/[0.08] bg-[#171717]/60 backdrop-blur-xl">
  {/* Left Panel (Visual) */}
  <div className="hidden md:flex w-5/12 bg-gradient-to-br from-blue-600/20 to-purple-600/20 p-8 items-center">
     <div>
        <h3 className="text-2xl font-bold text-white mb-2">Automate your<br/>workflow.</h3>
        <p className="text-blue-100/70 text-sm">Join 10,000+ companies.</p>
     </div>
  </div>
  
  {/* Right Panel (Form) */}
  <div className="w-full md:w-7/12 p-10 flex flex-col justify-center bg-[#0f0f0f]/50">
     <h4 className="text-xl font-semibold text-white mb-1">Create Account</h4>
     <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
           <GlassInput placeholder="First Name" />
           <GlassInput placeholder="Last Name" />
        </div>
        <GlassInput type="email" placeholder="work@company.com" />
        <GlassButton className="w-full bg-white text-black">Sign Up</GlassButton>
     </div>
  </div>
</div>
`;

const cardLoginCode = `
<GlassCard className="w-full max-w-sm mx-auto p-8 bg-[#171717]/80">
  <div className="text-center mb-8">
     <h3 className="text-xl font-bold text-white">Welcome back</h3>
  </div>
  
  <div className="grid grid-cols-2 gap-3 mb-6">
     <button className="btn-social">GitHub</button>
     <button className="btn-social">Google</button>
  </div>

  <div className="space-y-4">
     <GlassInput placeholder="name@example.com" />
     <GlassInput type="password" placeholder="••••••••" />
     <GlassButton className="w-full bg-white text-black">Sign In</GlassButton>
  </div>
</GlassCard>
`;

const otpCode = `
<GlassCard className="max-w-sm mx-auto p-8 text-center">
   <div className="icon-wrapper"><ShieldCheck /></div>
   <h3 className="text-lg font-bold text-white">Two-Step Verification</h3>
   
   <div className="flex gap-2 justify-center mb-8">
      {[1, 2, 3, 4, 5, 6].map(i => (
         <input key={i} maxLength={1} className="w-10 h-12 bg-white/5 border-white/10 text-center text-white" />
      ))}
   </div>
   
   <GlassButton className="w-full bg-blue-600 text-white">Verify</GlassButton>
</GlassCard>
`;

const analyticsCode = `
<GlassCard className="w-full bg-gradient-to-b from-[#171717]/80 to-[#0f0f0f]/90">
  <div className="flex justify-between mb-8">
     <div>
       <h3 className="font-semibold text-white">Revenue Growth</h3>
       <p className="text-2xl font-bold text-white">$124,500</p>
     </div>
     <div className="toggle-group">...</div>
  </div>

  <div className="flex items-end justify-between h-40 gap-3">
     {data.map((h) => (
        <div key={h} className="w-full bg-white/[0.05] hover:bg-blue-500 transition-all" style={{ height: \`\${h}%\` }} />
     ))}
  </div>
</GlassCard>
`;

const activityFeedCode = `
<GlassCard className="max-w-md bg-[#0f0f0f]/80">
  <div className="flex justify-between mb-6">
      <h3 className="font-semibold text-white">Recent Activity</h3>
  </div>
  <div className="relative space-y-6 pl-2">
     <div className="absolute left-[19px] top-3 bottom-3 w-[1px] bg-white/[0.1]"></div>
     {events.map((item) => (
        <div className="relative flex items-start gap-4 z-10">
           <div className="h-9 w-9 rounded-full bg-white/10 flex items-center justify-center">
              <Icon className="text-blue-400" />
           </div>
           <div>
              <h4 className="text-sm text-white">{item.title}</h4>
              <p className="text-xs text-neutral-500">{item.desc}</p>
           </div>
        </div>
     ))}
  </div>
</GlassCard>
`;

const comprehensiveDashboardCode = `
<GlassCard className="w-full" noPadding>
   {/* Header */}
   <div className="p-6 border-b border-white/10 flex justify-between items-center">
      <h2 className="text-xl font-bold text-white">Mission Control</h2>
      <div className="badge-status">Operational</div>
   </div>
   
   {/* Grid Stats */}
   <div className="grid grid-cols-4 border-b border-white/10">
      <StatCard label="Requests" value="2.4M" />
      <StatCard label="Latency" value="42ms" />
      <StatCard label="Errors" value="0.02%" />
      <StatCard label="CPU" value="78%" />
   </div>

   {/* Main Layout */}
   <div className="grid grid-cols-3">
      <div className="col-span-2 p-6">
         <Chart />
      </div>
      <div className="col-span-1 p-6 bg-white/5">
         <RegionDistibution />
         <Incidents />
      </div>
   </div>
   
   {/* Footer Table */}
   <Table />
</GlassCard>
`;

const teamTableCode = `
<GlassCard className="w-full overflow-hidden" noPadding>
  <div className="header flex justify-between">
    <h3>Team Members</h3>
    <GlassButton>Add Member</GlassButton>
  </div>
  <div className="grid">
    <div className="row">
       <div className="col">User</div>
       <div className="col">Role</div>
       <div className="col">Status</div>
    </div>
    {users.map(u => (
      <div className="row">
        <UserAvatar name={u.name} />
        <Badge>{u.role}</Badge>
        <StatusIndicator status={u.status} />
      </div>
    ))}
  </div>
</GlassCard>
`;

const taskCardCode = `
<div className="grid grid-cols-2 gap-6">
   <GlassCard>
      <Badge>Design System</Badge>
      <h4>Refactor Components</h4>
      <p>Description...</p>
      <div className="avatars">...</div>
      <ProgressBar value={66} />
   </GlassCard>

   <GlassCard className="border-dashed bg-transparent">
      <UploadIcon />
      <p>Upload Assets</p>
   </GlassCard>
</div>
`;

const pricingCode = `
<div className="grid grid-cols-3 gap-6">
   <GlassCard>
      <h3>Starter</h3>
      <p>$0</p>
      <Features list={['1 User', ...]} />
      <GlassButton variant="outline">Get Started</GlassButton>
   </GlassCard>

   <GlassCard className="bg-white/5 border-white/15">
      <Badge>POPULAR</Badge>
      <h3>Pro</h3>
      <p>$29</p>
      <GlassButton className="bg-blue-600">Upgrade</GlassButton>
   </GlassCard>
   
   <GlassCard>...</GlassCard>
</div>
`;

const storageCode = `
<div className="grid grid-cols-2 gap-6">
   <GlassCard className="bg-gradient-to-br from-[#171717] to-[#0a0a0a]">
      <CloudIcon />
      <h3>Cloud Storage</h3>
      <ProgressBar value={80} />
      <GlassButton variant="outline">Manage Plan</GlassButton>
   </GlassCard>
   
   <GlassCard>
      <CreditCardIcon />
      <h3>Visa **** 4242</h3>
      <div className="billing-info">...</div>
   </GlassCard>
</div>
`;

const feedbackCode = `
<div className="flex flex-col gap-4">
   {/* Success */}
   <div className="toast bg-green-500/10 border-green-500/20">
      <CheckCircle className="text-green-400" />
      <div>Saved Successfully</div>
      <CloseButton />
   </div>
   
   {/* Error */}
   <div className="toast bg-red-500/10 border-red-500/20">
      <AlertCircle className="text-red-400" />
      <div>Connection Failed</div>
      <CloseButton />
   </div>
</div>
`;

const actionToastCode = `
<GlassCard className="flex items-center gap-4 bg-[#171717]">
   <Spinner />
   <div className="flex-1">
      <h4>Deleting items...</h4>
      <p>Undo in 5s</p>
   </div>
   <div className="actions">
      <button>Dismiss</button>
      <GlassButton size="sm"><UndoIcon /> Undo</GlassButton>
   </div>
</GlassCard>
`;


// ==========================================
// EXPORT DATA OBJECT
// ==========================================
export interface LibrarySection {
  id: string;
  title: string;
  description: string;
  component: React.ReactNode;
  code: string;
  prompt: string;
  width?: 'full' | 'standard';
}

const COMMON_PROMPT_PREFIX = `
Act as a Senior Frontend Engineer.
Create a component using React, Tailwind CSS, and Lucide React icons.
Style it using the "Alher Tech UI" Design System (Glassmorphism, Dark Mode).

Design Tokens:
- Background: #0a0a0a (Main), #171717/60 (Cards), #ffffff/[0.05] (Inputs)
- Borders: border-white/[0.08]
- Font: Outfit (sans-serif)

Available Custom Components:
- <GlassCard className, noPadding>
- <GlassButton variant="primary|secondary|outline|ghost">
- <GlassInput>

Task:
`;

export const LIBRARY_CONTENT: Record<string, LibrarySection[]> = {
  auth: [
    {
      id: 'split-login',
      title: 'Split Screen Auth',
      description: 'Modern sign-up with visual storytelling.',
      component: <SplitLoginExample />,
      code: splitLoginCode,
      prompt: `${COMMON_PROMPT_PREFIX}
Create a split-screen login layout (h-[450px]).
1. Left Panel (5/12 width):
   - Background: Dark gradient (blue-600/20 to purple-600/20).
   - Content: An abstract logo, a bold headline "Automate your workflow", and a short testimonial.
   - Effect: Add a subtle noise texture overlay.
2. Right Panel (7/12 width):
   - Background: #0f0f0f/50.
   - Content: A "Create Account" form centered vertically.
   - Form Fields: Grid for First/Last Name, full-width Email and Password using <GlassInput>.
   - Action: Full-width "Sign Up" <GlassButton> with an arrow icon.`
    },
    {
      id: 'card-login',
      title: 'Centered Card Login',
      description: 'Minimalist, distraction-free authentication card with social options.',
      component: <CardLoginExample />,
      code: cardLoginCode,
      prompt: `${COMMON_PROMPT_PREFIX}
Create a centered authentication card (max-w-sm) using <GlassCard>.
Header: Centered logo box (white) and "Welcome back" text.
Body:
1. Two grid buttons for "GitHub" and "Google" social login (transparent bg with white/10 border).
2. A divider text "Or continue with".
3. Vertical form: Email and Password <GlassInput>.
4. Row with "Remember me" checkbox and "Forgot password?" link.
5. Full width "Sign In" <GlassButton>.`
    },
    {
      id: 'otp-verification',
      title: 'MFA / OTP Verification',
      description: 'Secure two-step verification screen with segmented inputs.',
      component: <OtpVerificationExample />,
      code: otpCode,
      prompt: `${COMMON_PROMPT_PREFIX}
Create a Two-Step Verification card (max-w-sm, centered text).
1. Icon: A ShieldCheck icon inside a large circular blue-500/10 background.
2. Title: "Two-Step Verification". Description: "Enter the code sent to your mobile."
3. Inputs: A row of 6 distinct, square inputs for the OTP digits.
4. Action: A full-width blue <GlassButton> "Verify My Account".
5. Footer: A "Resend code" text link.`
    }
  ],
  analytics: [
    {
      id: 'revenue-growth',
      title: 'Revenue Growth',
      description: 'Interactive bar chart visualization.',
      component: <RevenueGrowthExample />,
      code: analyticsCode,
      prompt: `${COMMON_PROMPT_PREFIX}
Create a "Revenue Growth" analytics card using <GlassCard>.
Header: Title on left, current value ($124,500) with a green +12.5% trending badge.
Right Header: A segmented control toggle for [7D, 30D, 3M].
Chart:
- A flex container aligning items to the bottom (h-40).
- Render 12 vertical bars (simple divs).
- Bars should have hover effects (white/5 to gradient blue).
- Show value tooltips on hover.
Footer: A row of month labels (Jan-Dec) in small uppercase text.`
    },
    {
      id: 'activity-feed',
      title: 'Activity Feed',
      description: 'Timeline for recent events.',
      component: <ActivityFeedExample />,
      code: activityFeedCode,
      prompt: `${COMMON_PROMPT_PREFIX}
Create a "Recent Activity" card (max-w-md).
Layout: Vertical timeline.
Visuals:
- Draw a thin vertical line on the left.
- Iterate through 4 events (Project created, Meeting, Task completed, Comment).
- Each event has a circular icon background (yellow/blue/green/purple) positioned over the line.
- Content: Title (white), Time (neutral), and Description (neutral).
- Add hover effects to the timeline items.`
    }
  ],
  complex: [
    {
      id: 'mission-control',
      title: 'Mission Control Dashboard',
      description: 'High-density data visualization with charts, grids, and status indicators.',
      component: <MissionControlExample />,
      code: comprehensiveDashboardCode,
      width: 'full',
      prompt: `${COMMON_PROMPT_PREFIX}
Create a comprehensive "Mission Control" dashboard using <GlassCard noPadding>.
1. Header: "Mission Control" title with Server icon, "Operational" status badge (pulsing green), and "Report" button.
2. Key Metrics Row (Grid 4):
   - Display: Total Requests, Avg Latency, Error Rate, CPU Usage.
   - Style: Big numbers, small trend badges (+/- %).
3. Main Content (Grid 1/3 split):
   - Left (2/3): "Traffic Overview" chart area. Simulate a complex bar chart with 24 bars and grid lines.
   - Right (1/3): "Distribution" sidebar. Progress bars for Server Regions (US-East, EU-West, etc.). Below that, an "Active Incidents" alert box (red bg).
4. Footer Table:
   - Rows showing Process ID, Name, Status Badge, and Duration.`
    }
  ],
  crm: [
    {
      id: 'team-table',
      title: 'Team Management',
      description: 'High-density data table with status indicators.',
      component: <TeamTableExample />,
      code: teamTableCode,
      prompt: `${COMMON_PROMPT_PREFIX}
Create a Team Management table using <GlassCard noPadding>.
Header: Title "Team Members" and an "Add Member" button.
Table Structure:
- Columns: User (Avatar + Name + Email), Role (Badge), Status (Dot + Text), Actions.
- Rows: Render 4-5 dummy users.
- Styling: Border-b between rows, hover effect on rows. Use Lucide icons for actions.`
    },
    {
      id: 'task-cards',
      title: 'Task Cards & Upload',
      description: 'Project management and file utility components.',
      component: <TaskCardsExample />,
      code: taskCardCode,
      prompt: `${COMMON_PROMPT_PREFIX}
Create a 2-column grid layout.
Card 1 (Task):
- A "Design System" badge at top.
- Title "Refactor Glass Components".
- Description text.
- Footer: Avatar stack (+2), Comment/Attachment icons count.
- A progress bar at the bottom (66% filled).

Card 2 (Upload):
- Dashed border style.
- Centered content: Upload icon in a circle, text "Upload Assets", subtext "Drag & drop".`
    }
  ],
  utility: [
    {
      id: 'pricing',
      title: 'Pricing Models',
      description: 'Tiered pricing cards with popular choice highlight.',
      component: <PricingCardsExample />,
      code: pricingCode,
      prompt: `${COMMON_PROMPT_PREFIX}
Create a Pricing Grid (3 columns).
Cards: Starter ($0), Pro ($29), Enterprise ($99).
Feature:
- Highlight the "Pro" card with a different background (white/5) and a "POPULAR" ribbon at the top right.
- Each card lists features using Check icons.
- Buttons: Outline for Starter/Enterprise, Primary Blue for Pro.`
    },
    {
      id: 'storage',
      title: 'Subscription & Storage',
      description: 'Complex widget layouts for user settings.',
      component: <StorageWidgetExample />,
      code: storageCode,
      prompt: `${COMMON_PROMPT_PREFIX}
Create a 2-column grid for Settings widgets.
Widget 1 (Storage):
- Background: Gradient (dark to black).
- Content: Large Cloud icon decoration. "Cloud Storage" title.
- Progress: "800GB / 1TB" usage bar (gradient fill).
- Action: "Manage Plan" button.

Widget 2 (Payment):
- Header: CreditCard icon and "Primary" badge.
- Content: "Visa ending in 4242", Expiry date.
- Footer (Border-t): Row for "Next Billing" date and "Amount" ($299).`
    }
  ],
  feedback: [
      {
          id: 'status-toasts',
          title: 'Status Notifications',
          description: 'Glass-morphic success, error, and info toasts.',
          component: <StatusToastsExample />,
          code: feedbackCode,
          prompt: `${COMMON_PROMPT_PREFIX}
Create a stack of 3 Toast notifications (Success, Error, Info).
Style:
- Glass background with tinted borders (Green/Red/Blue).
- Layout: Icon (left), Title + Description (middle), Close Button (right).
- Backdrop blur enabled.`
      },
      {
          id: 'action-toast',
          title: 'Action Toast',
          description: 'Complex notification with undo capability.',
          component: <ActionToastExample />,
          code: actionToastCode,
          prompt: `${COMMON_PROMPT_PREFIX}
Create a complex Action Toast.
Background: Dark solid (#171717) with white/10 border (High contrast).
Content:
1. Loading Spinner (left).
2. Text "Deleting 3 items..." and "Undo in 5s".
3. Right side actions separated by a border: "Dismiss" (text) and "Undo" (Small GlassButton).`
      }
  ]
};
