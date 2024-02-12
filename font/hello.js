axios.get("http://localhost:3200/jobs")
  .then((res) => {
    // Handle the response data here
    res.data.forEach((job) => {
        console.log(`Job Title: ${job.id}, Company: ${job.punchline}`);
        // Add any other processing logic here
      });

  })
  .catch((error) => {
    // Handle errors here
    console.error(error);
  });


