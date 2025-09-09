-- Sample data for Life as a Service application

-- Insert sample users
INSERT INTO users (first_name, last_name, email, mobile, password_hash, subscription_plan) VALUES
('John', 'Doe', 'john.doe@example.com', '+1234567890', '$2b$10$example_hash_1', 'premium'),
('Jane', 'Smith', 'jane.smith@example.com', '+1234567891', '$2b$10$example_hash_2', 'free'),
('Mike', 'Johnson', 'mike.johnson@example.com', '+1234567892', '$2b$10$example_hash_3', 'pro');

-- Insert sample daily activities
INSERT INTO daily_activities (user_id, activity_type, description, voice_transcript, mood_score) VALUES
(1, 'food', 'Had pizza and coke for lunch', 'I ate pizza and drank coke for lunch today', 7),
(1, 'exercise', 'Morning jog for 30 minutes', 'I went for a 30 minute jog this morning', 8),
(1, 'mood', 'Feeling productive and energetic', 'I am feeling very productive and energetic today', 9),
(2, 'food', 'Healthy salad with grilled chicken', 'I had a healthy salad with grilled chicken', 8),
(2, 'study', 'Studied React for 2 hours', 'I studied React development for 2 hours', 7);

-- Insert sample tasks
INSERT INTO tasks (user_id, title, description, completed, priority, due_date) VALUES
(1, 'Complete project proposal', 'Finish the quarterly project proposal document', FALSE, 'high', '2024-02-15 17:00:00'),
(1, 'Morning meditation', 'Daily 10-minute meditation session', TRUE, 'medium', '2024-02-10 07:00:00'),
(1, 'Team meeting', 'Weekly team sync meeting', FALSE, 'medium', '2024-02-10 10:00:00'),
(2, 'Grocery shopping', 'Buy weekly groceries', FALSE, 'low', '2024-02-11 15:00:00'),
(2, 'Doctor appointment', 'Annual health checkup', FALSE, 'high', '2024-02-12 14:00:00');

-- Insert sample diet entries
INSERT INTO diet_entries (user_id, meal_type, food_items, calories_estimated, ai_suggestions) VALUES
(1, 'breakfast', 'Oatmeal with fruits and nuts', 350, 'Great choice! High in fiber and protein. Consider adding berries for antioxidants.'),
(1, 'lunch', 'Pizza and coke', 800, 'High in calories and sodium. Try to balance with a salad and water for the rest of the day.'),
(2, 'breakfast', 'Greek yogurt with honey', 200, 'Excellent protein source! Perfect for morning energy.'),
(2, 'lunch', 'Grilled chicken salad', 400, 'Perfect balanced meal with lean protein and vegetables.');

-- Insert sample mood recordings
INSERT INTO mood_recordings (user_id, mood_score, audio_transcript, ai_analysis) VALUES
(1, 8, 'I am feeling great today, very motivated to work on my projects', 'User shows high energy and motivation. Positive emotional state detected.'),
(1, 6, 'Feeling a bit tired but overall okay', 'Mild fatigue detected. Recommend adequate rest and hydration.'),
(2, 9, 'Extremely happy and excited about the new opportunities', 'Very positive emotional state. High enthusiasm and optimism detected.');

-- Insert sample study plans
INSERT INTO study_plans (user_id, subject, study_goal, plan_details, progress_percentage, target_date) VALUES
(1, 'React Development', 'Master React hooks and state management', 'Week 1: Basic hooks, Week 2: useEffect and useContext, Week 3: Custom hooks, Week 4: State management with Redux', 25, '2024-03-15'),
(2, 'Data Science', 'Complete Python data analysis course', 'Month 1: Python basics, Month 2: Pandas and NumPy, Month 3: Machine Learning basics', 40, '2024-05-01');

-- Insert sample habits
INSERT INTO habits (user_id, habit_name, frequency, streak_count, last_completed) VALUES
(1, 'Morning meditation', 'daily', 15, '2024-02-09'),
(1, 'Exercise', 'daily', 8, '2024-02-09'),
(1, 'Reading', 'daily', 22, '2024-02-09'),
(2, 'Drink 8 glasses of water', 'daily', 5, '2024-02-08'),
(2, 'Learn new programming concept', 'daily', 12, '2024-02-09');

-- Insert sample finance entries
INSERT INTO finance_entries (user_id, entry_type, amount, category, description, date, ai_suggestions) VALUES
(1, 'income', 5000.00, 'salary', 'Monthly salary', '2024-02-01', 'Consider allocating 20% to savings and 10% to investments.'),
(1, 'expense', 1200.00, 'rent', 'Monthly apartment rent', '2024-02-01', 'Rent is within recommended 25% of income. Good financial planning.'),
(1, 'expense', 300.00, 'food', 'Groceries and dining', '2024-02-05', 'Food expenses are reasonable. Consider meal planning to optimize further.'),
(2, 'income', 3500.00, 'freelance', 'Web development project', '2024-02-03', 'Great additional income! Consider setting aside 30% for taxes.');

-- Insert sample reminders
INSERT INTO reminders (user_id, title, description, reminder_type, reminder_datetime) VALUES
(1, 'Credit card payment', 'Pay credit card bill - $1,500', 'payment', '2024-02-15 09:00:00'),
(1, 'Team meeting', 'Weekly team sync with project updates', 'meeting', '2  '2024-02-15 09:00:00'),
(1, 'Team meeting', 'Weekly team sync with project updates', 'meeting', '2024-02-10 10:00:00'),
(1, 'Doctor appointment', 'Annual health checkup reminder', 'health', '2024-02-20 13:30:00'),
(2, 'Rent payment', 'Monthly rent due', 'payment', '2024-02-28 23:59:00'),
(2, 'Project deadline', 'Submit final project deliverables', 'task', '2024-02-25 17:00:00');

-- Insert sample AI conversations
INSERT INTO ai_conversations (user_id, user_input, ai_response, conversation_type) VALUES
(1, 'I ate pizza and coke for lunch', 'I understand you had pizza and coke for lunch. While pizza can be enjoyable, it is high in calories and sodium. For your next meal, I recommend incorporating more vegetables and drinking water to balance your nutrition for the day.', 'voice'),
(1, 'I feel tired today', 'I notice you are feeling tired today. This could be due to various factors like sleep quality, stress, or nutrition. I recommend getting adequate rest tonight, staying hydrated, and perhaps taking a short walk for some fresh air.', 'voice'),
(2, 'I want to learn React better', 'That is a great goal! React is a powerful framework for building user interfaces. I can help you create a structured learning plan. Would you like me to suggest a step-by-step approach starting with the fundamentals?', 'voice');

-- Insert sample subscription payments
INSERT INTO subscription_payments (user_id, plan_type, amount, payment_status, expiry_date) VALUES
(1, 'premium', 499.00, 'completed', '2024-03-10'),
(3, 'pro', 999.00, 'completed', '2024-03-05');
