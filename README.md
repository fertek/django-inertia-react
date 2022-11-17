# django-inertia-react

Based on the [Inertia.js + Django Setup](https://youtu.be/85-i4fr5MeU) tutorial by [Honoré Hounwanou](https://github.com/mercuryseries).

## Setup

```
mkdir inertia && cd inertia/
python3 -m venv venv && source venv/bin/activate
git clone git@github.com:fertek/django-inertia-react.git src && cd src/
pip install -r requirements.txt
```

Terminal 1:

```
# cd inertia/src/
npm install
npm run dev
```

Terminal 2:

```
# cd inertia/src/
./manage.py migrate
./manage.py runserver
```

Visit http://localhost:8000/.
