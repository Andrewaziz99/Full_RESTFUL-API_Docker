FROM nginx:alpine

COPY . /usr/share/nginx/html

# Optionally, you can include an Nginx configuration file
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80 for the Nginx server
EXPOSE 80

# Set the command to run when the container starts
CMD ["nginx", "-g", "daemon off;"]
