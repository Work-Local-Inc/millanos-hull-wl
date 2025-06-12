# Memory Bank Instructions: How to Work with This Context System

## Purpose & Philosophy

This Memory Bank serves as a **persistent context preservation system** for the Stripe payment integration project and future restaurant integrations. It maintains critical context across development sessions, team handoffs, and project scaling.

### Core Principles
1. **Context Preservation**: Maintain detailed project context between sessions
2. **Decision Tracking**: Record key technical and business decisions with rationale
3. **Progress Visibility**: Clear status of what's working, what's not, and what's next
4. **Scalability**: Support expansion to multiple restaurants using same codebase
5. **Knowledge Transfer**: Enable smooth handoffs between developers

## Memory Bank Structure

### Core Files (Always Update)
1. **`projectbrief.md`** - Foundation document, update when project scope changes
2. **`activeContext.md`** - Update EVERY session with current focus and next steps
3. **`progress.md`** - Update when features are completed or major milestones reached
4. **`systemPatterns.md`** - Update when architectural decisions are made
5. **`techContext.md`** - Update when dependencies, environment, or constraints change

### Supporting Files (Update as Needed)
6. **`productContext.md`** - Update when business requirements or value proposition evolves

## How to Use This Memory Bank

### 🔄 At Start of Each Session
1. **Read `activeContext.md`** - Understand current focus and immediate next steps
2. **Check `progress.md`** - Review what's working and what needs to be built
3. **Review `systemPatterns.md`** - Understand architectural decisions and patterns
4. **Scan `techContext.md`** - Verify tech stack and environment setup

### ✅ During Development Session
1. **Update `activeContext.md`** as you work:
   - Move items from "Next Steps" to "Current Work"
   - Add any blockers or discoveries
   - Update "What We Know" section with new insights

2. **Update `progress.md`** when features are completed:
   - Move items from "What's Left to Build" to "What Works"
   - Update status of partially working features
   - Add new discoveries to the backlog

### 📝 At End of Each Session
1. **Update `activeContext.md`** with:
   - Summary of what was accomplished
   - What's in progress (if stopping mid-task)
   - Clear next steps for next session
   - Any blockers or open questions

2. **Update other files** as needed:
   - `systemPatterns.md` if architectural decisions were made
   - `techContext.md` if dependencies or setup changed
   - `progress.md` if major milestones were reached

## AI Agent Instructions

### For Development Tasks
When working on this Stripe integration project:

1. **Always start by reading Memory Bank files** to understand current context
2. **Reference existing patterns** in `systemPatterns.md` before implementing new solutions
3. **Follow established tech stack** documented in `techContext.md`
4. **Update Memory Bank** throughout the session, especially `activeContext.md`

### For Code Implementation
```typescript
// Before implementing new features, check:
// 1. systemPatterns.md for established patterns
// 2. techContext.md for current dependencies and constraints
// 3. activeContext.md for immediate priorities

// Example: Implementing Stripe checkout
// Check systemPatterns.md for "Payment Processing Pattern"
// Check techContext.md for Stripe integration details
// Update activeContext.md with progress
```

### For Architecture Decisions
When making technical decisions:
1. **Document rationale** in `systemPatterns.md`
2. **Consider multi-restaurant scaling** (restaurant_id in all relevant tables)
3. **Follow established patterns** for cart management, error handling, etc.
4. **Update `techContext.md`** if new dependencies are added

## Specific Project Guidance

### Restaurant Multi-Tenancy
**Always include `restaurant_id`** in new database tables:
```sql
-- ✅ Correct multi-restaurant pattern
CREATE TABLE orders (
  id UUID PRIMARY KEY,
  restaurant_id UUID REFERENCES restaurants(id), -- Always include this
  -- ... other fields
);

-- ❌ Avoid single-restaurant patterns
CREATE TABLE orders (
  id UUID PRIMARY KEY,
  -- Missing restaurant_id - won't scale
);
```

### Cart Integration Pattern
When modifying checkout flows, preserve existing cart management:
```typescript
// ✅ Preserve existing useCart hook patterns
const { cart, clearCart } = useCart();

// Transform cart data for Stripe
const orderData = {
  items: cart.items,
  subtotal: cart.subtotal,
  tax: cart.tax,
  total: cart.total,
  // ... preserve all existing cart fields
};
```

### Error Handling Pattern
Follow established error handling patterns:
```typescript
// ✅ Use toast notifications for user feedback
const { toast } = useToast();

try {
  await stripePaymentAction();
} catch (error) {
  toast({
    title: "Payment Error",
    description: error.message,
    variant: "destructive"
  });
}
```

## Common Scenarios

### 🆕 Starting New Session
```markdown
1. Read activeContext.md - what's the current focus?
2. Check progress.md - what's working vs. what needs to be built?
3. Begin work on items from "Immediate Next Steps"
4. Update activeContext.md as you progress
```

### 🔄 Switching Contexts (e.g., mobile to desktop)
```markdown
1. Check systemPatterns.md for "Multi-Platform UI Pattern"
2. Review existing mobile/desktop implementations in progress.md
3. Follow established patterns for shared logic
4. Update progress.md when features are complete
```

### 🚨 Encountering Blockers
```markdown
1. Document blocker in activeContext.md under "Current Blockers"
2. Check if similar issues are documented in techContext.md
3. Update progress.md if blocker affects timeline
4. Move to alternative tasks while blocker is resolved
```

### 🎯 Preparing for Handoff
```markdown
1. Ensure activeContext.md clearly states current status
2. Update progress.md with what's complete vs. in-progress
3. Document any new patterns in systemPatterns.md
4. Update techContext.md with any environment changes
```

## File Update Frequency

### Every Session (Required)
- **`activeContext.md`** - Current work focus and next steps

### When Features Complete (Important)
- **`progress.md`** - Move completed items from backlog to working

### When Architecture Changes (Important)
- **`systemPatterns.md`** - New patterns or technical decisions

### When Environment Changes (As Needed)
- **`techContext.md`** - Dependencies, setup, or constraints

### When Scope Changes (Rare)
- **`projectbrief.md`** - Major project changes
- **`productContext.md`** - Business requirements evolution

## Success Metrics for Memory Bank Usage

### ✅ Good Memory Bank Maintenance
- Sessions start with clear understanding of current state
- Context is preserved between sessions without loss
- Patterns are consistently followed across implementations
- New team members can quickly understand project status

### ❌ Poor Memory Bank Maintenance
- Time wasted rediscovering previous decisions
- Inconsistent patterns across similar implementations
- Context lost between sessions requiring re-analysis
- Unclear project status or next steps

## Multi-Restaurant Scaling Notes

When this system scales to multiple restaurants:
1. **Each restaurant inherits this same payment integration**
2. **Memory Bank patterns apply to all restaurant implementations**
3. **Restaurant-specific customizations documented in systemPatterns.md**
4. **Core architecture remains consistent across all restaurants**

This Memory Bank serves as the blueprint for scaling to multiple restaurant partners while maintaining consistent, high-quality implementations. 