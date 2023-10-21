from django.apps import AppConfig
import pandas as pd
from  joblib import load
import os


class ModelConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'model'
    # BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    # MLMODEL_FOLDER = os.path.join(BASE_DIR,'model/mlmodel/')
    # # MLMODEL_FILE = os.path.join(MLMODEL_FOLDER,'IRISRandomForestClassifier.joblib')
    # MLMODEL_FILE = os.path.join(MLMODEL_FOLDER,'IRIS.csv')

    # mlmodel = load(MLMODEL_FILE)
