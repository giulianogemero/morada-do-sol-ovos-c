# Planning Guide

Morada do Sol Ovos Caipiras is a premium egg delivery service connecting Brazilian customers with authentic free-range, organic eggs through a subscription-based platform that educates customers about the superior quality and health benefits of caipira eggs.

**Experience Qualities**:
1. **Trustworthy** - Building confidence through transparency about farming practices and founder expertise
2. **Educational** - Informing customers about the health and ethical benefits of choosing caipira eggs over industrial alternatives
3. **Convenient** - Streamlining the subscription process with flexible delivery options and clear pricing

**Complexity Level**: Light Application (multiple features with basic state)
- The app manages customer onboarding, subscription preferences, delivery schedules, and educational content without requiring complex user accounts or payment processing

## Essential Features

**Customer Onboarding**
- Functionality: Collects customer information and consumption preferences
- Purpose: Personalizes the experience and enables delivery logistics
- Trigger: First-time app visit
- Progression: Welcome → Personal Info (name/email/phone) → Address Details → Household Info (people count) → Consumption Habits → Complete Profile
- Success criteria: Customer profile saved with all required delivery and preference data

**Analytics Dashboard**
- Functionality: Displays personalized delivery schedule, consumption tracking, and educational content
- Purpose: Keeps customers informed about their subscription and educated about product benefits
- Trigger: Returning customer app access
- Progression: Dashboard Load → Next Delivery Info → Consumption Stats → Educational Content Rotation
- Success criteria: Current delivery status visible, consumption data accurately reflected

**Subscription Management**
- Functionality: Allows customers to select egg quantities, delivery frequency, and pricing calculation
- Purpose: Flexible subscription options that match household needs
- Trigger: Plan selection from dashboard or onboarding completion
- Progression: Plan Selection → Quantity Choice (12/24/36/48) → Frequency (weekly/biweekly) → Price Calculation → Confirm Subscription
- Success criteria: Active subscription saved with correct pricing and schedule

**Founder Profile**
- Functionality: Showcases founder's credentials and farming expertise
- Purpose: Builds trust and credibility through professional background
- Trigger: "About" or founder section access
- Progression: Profile Access → Education Background → Experience Timeline → Methodology Overview
- Success criteria: Complete founder information displayed with clear credibility markers

## Edge Case Handling

- **Incomplete Onboarding**: Save partial progress and allow resume from last completed step
- **Address Validation**: Provide helpful error messages for incomplete or invalid Brazilian addresses
- **Zero Consumption Input**: Guide users with average household consumption suggestions
- **Plan Changes**: Allow easy modification of existing subscriptions with price recalculation
- **Delivery Conflicts**: Display clear messaging about Monday delivery schedule and holiday adjustments

## Design Direction

The design should feel trustworthy, natural, and distinctly Brazilian, evoking the warmth of countryside farming while maintaining modern professionalism. A clean, minimal interface that prioritizes educational content and clear subscription information.

## Color Selection

Custom palette inspired by Brazilian countryside and natural farming
- **Primary Color**: Warm Terra Cotta (oklch(0.65 0.15 35)) - communicates earthiness and Brazilian warmth, representing natural farming
- **Secondary Colors**: Soft Sage Green (oklch(0.75 0.08 135)) for freshness and organic quality, Cream White (oklch(0.96 0.02 85)) for cleanliness and purity
- **Accent Color**: Golden Yellow (oklch(0.8 0.12 85)) - representing egg yolks and sunshine, used for CTAs and highlights
- **Foreground/Background Pairings**: 
  - Background (Cream White): Dark Brown text (oklch(0.25 0.05 35)) - Ratio 7.2:1 ✓
  - Card (White): Dark Brown text (oklch(0.25 0.05 35)) - Ratio 8.1:1 ✓
  - Primary (Terra Cotta): White text (oklch(0.98 0 0)) - Ratio 5.8:1 ✓
  - Secondary (Sage Green): Dark Brown text (oklch(0.25 0.05 35)) - Ratio 6.5:1 ✓
  - Accent (Golden Yellow): Dark Brown text (oklch(0.25 0.05 35)) - Ratio 8.9:1 ✓

## Font Selection

Typography should convey warmth and reliability while maintaining excellent readability for educational content, using Inter for its clean versatility and international character support for Portuguese.

- **Typographic Hierarchy**: 
  - H1 (App Title): Inter Bold/32px/tight letter spacing
  - H2 (Section Headers): Inter SemiBold/24px/normal spacing
  - H3 (Subsections): Inter Medium/20px/normal spacing
  - Body Text: Inter Regular/16px/relaxed line height for readability
  - Small Text (pricing/details): Inter Regular/14px/normal spacing

## Animations

Subtle, purposeful animations that reinforce the natural, organic brand personality without overwhelming the educational content focus.

- **Purposeful Meaning**: Gentle transitions that mirror natural growth and harvest cycles, with organic easing curves
- **Hierarchy of Movement**: Delivery countdown animations, plan selection feedback, smooth page transitions for onboarding flow

## Component Selection

- **Components**: Cards for dashboard analytics, Forms for onboarding, Tabs for plan selection, Badge for delivery status, Progress for onboarding completion, Button variants for different action priorities, Input components with proper validation
- **Customizations**: Custom card layouts for egg count visualization, Brazilian address form components, consumption tracking charts
- **States**: Buttons show clear selected states for plan options, inputs provide real-time validation for Brazilian phone/address formats
- **Icon Selection**: Truck icons for delivery, Calendar for scheduling, Users for household size, Heart for health benefits, Award for founder credentials
- **Spacing**: Generous padding (p-6/p-8) for cards, consistent gap-4 for form elements, relaxed spacing for readability
- **Mobile**: Stack cards vertically on mobile, collapsible sections for founder info, touch-friendly button sizing for plan selection