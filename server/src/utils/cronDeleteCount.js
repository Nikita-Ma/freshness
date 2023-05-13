const cron = require('node-cron')
const db = require('../config/db')

// Function to increment the counter
const incrementCounter = async () => {
  try {
    const currentDate = new Date()
    const today = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate()
    )
    const client = await db.connect()

    // Check if the counter was already updated today
    const result = await client.query(
      'SELECT * FROM product_data WHERE last_updated >= $1',
      [today]
    )

    if (result.rowCount === 0) {
      // If the counter was not updated today, increment the value and update the last_updated column
      await client.query(
        'UPDATE product_data SET p_count = p_count - 1, last_updated = $1',
        [currentDate]
      )
      console.log('Counter incremented successfully.')
    } else {
      console.log('Counter already incremented today.')
    }

    client.release()
  } catch (error) {
    console.error('An error occurred:', error)
  }
}
const activateCronJob = () => {
  // Schedule the cron job to run at 12:00 AM every day
  cron.schedule('0 0 * * *', async () => {
    await incrementCounter()
  })
}

module.exports = activateCronJob
