from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

tasks_file_path = 'tasks.txt'

@app.route("/login")
def login():
    return render_template("login.html")

@app.route("/home")
def hello():
    return render_template("index.html")

@app.route('/add_task', methods=['POST'])
def add_task():
    try:
        data = request.get_json()
        task = data.get('task')
        due_date = data.get('dueDate')  # New line to get due date

        if not task:
            raise ValueError('Task cannot be empty.')

        with open('tasks.txt', 'a') as tasks_file:
            tasks_file.write(f'Task: {task}, Due Date: {due_date}\n')

        return jsonify({'status': 'success'})
    except Exception as e:
        return jsonify({'status': 'error', 'message': str(e)})


if __name__ == "__main__":
    app.run(debug=True)


