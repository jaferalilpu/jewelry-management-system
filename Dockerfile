# Use Nginx as the base image
FROM nginx:alpine

# Copy the content of the current directory to the default Nginx public directory
COPY . /usr/share/nginx/html

# Expose port 8080
EXPOSE 8080

# Start Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
