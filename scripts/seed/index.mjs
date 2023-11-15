import { seedUsers } from './users.mjs';
import { seedFriends } from './friends.mjs';
import { seedGoals } from './goals.mjs';
import { seedMilestones } from './milestones.mjs';

await seedUsers();
// await seedFriends();
await seedGoals();
await seedMilestones();
